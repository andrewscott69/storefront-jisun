export const dynamic = "force-dynamic";

// /app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const BUCKET_PATH = `/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_BUCKET || "jinsunbk"}/products/`;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Extract filters
    const categories = searchParams.getAll("categories[]"); 
    const brands = searchParams.getAll("brands[]");
    const minPrice = parseFloat(searchParams.get("minPrice") || "0");
    const maxPrice = parseFloat(searchParams.get("maxPrice") || "100000");

    // Build query safely
    const where: any = {
      price: { gte: minPrice, lte: maxPrice },
    };

    // The UI sends IDs, but names are accepted too. The scalar fields on the
    // Prisma model are category_id / brand_id - "categoryId" and "brandId" are
    // the API's own output shape and do not exist on the model, so querying
    // them threw and turned every filtered request into a 500.
    //
    // Each filter is its own OR inside a top-level AND: picking a category and
    // a brand has to narrow the results, not widen them the way a single
    // shared OR array did.
    const and: any[] = [];

    if (categories?.length) {
      and.push({
        OR: [
          { category: { name: { in: categories, mode: "insensitive" } } },
          { category_id: { in: categories } },
        ],
      });
    }

    if (brands?.length) {
      and.push({
        OR: [
          { brand: { name: { in: brands, mode: "insensitive" } } },
          { brand_id: { in: brands } },
        ],
      });
    }

    if (and.length) where.AND = and;

    const products = await prisma.product.findMany({
      where,
      include: {
        category: { select: { id: true, name: true } },
        brand: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const formatted = products.map((p) => {
      const imageUrl = p.image_url
        ? p.image_url.startsWith("http")
          ? p.image_url
          : `${SUPABASE_URL}${BUCKET_PATH}${p.image_url}`
        : "/placeholder.jpg";

      return {
        id: p.id,
        name: p.name,
        description: p.description ?? "",
        categoryId: p.category?.id ?? null,
        category: p.category?.name ?? "Uncategorized",
        brandId: p.brand?.id ?? null,
        brand: p.brand?.name ?? "Unknown Brand",
        price: p.price,
        originalPrice: p.original_price ?? null,
        rating: p.rating ?? 4.9,
        review_count: p.review_count ?? 0,
        image_url: imageUrl,
        badge: p.is_best_seller
          ? "Best Seller"
          : p.is_new
          ? "New"
          : p.is_featured
          ? "Featured"
          : p.is_out_of_stock
          ? "Out of Stock"
          : null,
        inStock: !p.is_out_of_stock,
      };
    });

    return NextResponse.json(Array.isArray(formatted) ? formatted : []);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products." }, { status: 500 });
  }
}
