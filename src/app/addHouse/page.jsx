"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddHouse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 
  const [precio, setPrecio ] = useState("");
  const [habitaciones, setHabitaciones] = useState('');
  const [banos, setBanos] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !precio || !habitaciones || !banos) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/houses", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description, precio, habitaciones, banos }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a house");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Description"
      />
      <input
        onChange={(e) => setPrecio(e.target.value)}
        value={precio}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Precio"
      />
      <input
        onChange={(e) => setHabitaciones(e.target.value)}
        value={habitaciones}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Habitaciones"
      />
      <input
        onChange={(e) => setBanos(e.target.value)}
        value={banos}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Baños"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add House
      </button>
    </form>
  );
}