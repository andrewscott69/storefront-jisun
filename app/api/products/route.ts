export const dynamic = "force-dynamic";

// /app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ Supabase image base
const SUPABASE_URL = "https://hridnstmdhiuypqsgcnf.supabase.co";
const BUCKET_PATH = "/storage/v1/object/public/product-images/products/";

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

    if (categories?.length) {
      where.OR = [
        { category: { name: { in: categories, mode: "insensitive" } } },
        { categoryId: { in: categories } }, // handle both string or ID filters
      ];
    }

    if (brands?.length) {
      where.OR = [
        ...(where.OR || []),
        { brand: { name: { in: brands, mode: "insensitive" } } },
        { brandId: { in: brands } },
      ];
    }

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
