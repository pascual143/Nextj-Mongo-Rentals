import connectMongoDB from "@/libs/mongodb";
import House from "@/models/house";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, precio, habitaciones, banos } = await request.json();
  await connectMongoDB();
  await House.create({ title, description, precio, habitaciones, banos });
  return NextResponse.json({ message: "House Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const houses = await House.find();
  return NextResponse.json({ houses });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await House.findByIdAndDelete(id);
  return NextResponse.json({ message: "House deleted" }, { status: 200 });
}