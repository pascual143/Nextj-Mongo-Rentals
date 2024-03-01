import mongoose, { Schema } from "mongoose";

const houseSchema = new Schema(
  {
    title: String,
    description: String,
    precio: Number,
    habitaciones: Number,
    banos: Number,
  },
  {
    timestamps: true,
  }
);

const House = mongoose.models.House || mongoose.model("House", houseSchema);

export default House;