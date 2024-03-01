import connectMongoDB from "@/libs/mongodb";
import House from "@/models/house";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description, newPrecio: precio, newHabitaciones: habitaciones, newBano: banos } = await request.json();
  await connectMongoDB();
  await House.findByIdAndUpdate(id, { title, description, precio, habitaciones, banos });
  return NextResponse.json({ message: "House updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const house = await House.findOne({ _id: id });
  return NextResponse.json({ house }, { status: 200 });
}