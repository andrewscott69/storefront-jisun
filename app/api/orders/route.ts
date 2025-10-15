import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      address,
      city,
      state,
      zip,
      country,
      totalPrice,
      items,
    } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        company,
        address,
        city,
        state,
        zip,
        country,
        totalPrice,
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            name: item.name,
            image: item.image || "",
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error("❌ Order creation failed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create order" },
      { status: 500 }
    );
  }
}
