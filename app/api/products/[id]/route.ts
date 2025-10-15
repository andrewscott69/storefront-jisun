import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const SUPABASE_URL = "https://hridnstmdhiuypqsgcnf.supabase.co";
const BUCKET_PATH = "/storage/v1/object/public/product-images/products/";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log("Fetching product with ID:", params.id);

    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        category: { select: { id: true, name: true } },
        brand: { select: { id: true, name: true } },
      },
    });

    if (!product) {
      console.log("Product not found in database");
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // ✅ Convert single image URL or string to array for frontend
    const imageArray = product.image_url
      ? [product.image_url.startsWith("http")
          ? product.image_url
          : `${SUPABASE_URL}${BUCKET_PATH}${product.image_url}`]
      : ["/placeholder.svg"];

    // ✅ Format the product structure to match ProductDetailPage expectations
    const formattedProduct = {
      id: product.id,
      name: product.name,
      description: product.description ?? "",
      category: product.category?.name ?? "Uncategorized",
      brand: product.brand?.name ?? "Unknown Brand",
      price: product.price,
      originalPrice: product.original_price ?? null,
      rating: product.rating ?? 4.9,
      review_count: product.review_count ?? 0,
      image_url: imageArray,
      badge: product.is_best_seller
        ? "Best Seller"
        : product.is_new
        ? "New"
        : product.is_featured
        ? "Featured"
        : product.is_out_of_stock
        ? "Out of Stock"
        : null,
      inStock: !product.is_out_of_stock,
      stockCount: product.is_out_of_stock ? 0 : 10, // optional
      specifications: {},
      features: [],
      warranty: "1 Year Manufacturer Warranty",
      shipping: "Free shipping on orders over $50",
    };

    return NextResponse.json(formattedProduct);
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
