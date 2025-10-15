import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// ✅ Get all brands (with product counts)
export async function GET() {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        _count: { select: { products: true } },
      },
      orderBy: { name: "asc" },
    });

    const formatted = brands.map((b) => ({
      id: b.id,
      name: b.name,
      product_count: b._count.products,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Error fetching brands:", error);
    return NextResponse.json({ error: "Failed to fetch brands" }, { status: 500 });
  }
}