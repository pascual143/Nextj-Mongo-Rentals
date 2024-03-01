"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditHouseForm({ id, title, description, precio, habitaciones, banos }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description); 
  const [newPrecio, setNewPrecio ] = useState(precio);
  const [newHabitaciones, setNewHabitaciones] = useState(habitaciones);
  const [newBanos, setNewBanos] = useState(banos);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/houses/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription, newPrecio, newHabitaciones, newBanos }),
      });

      if (!res.ok) {
        throw new Error("Failed to update house");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Description"
      />
      <input
        onChange={(e) => setNewPrecio(e.target.value)}
        value={newPrecio}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="House Precio"
      />
      <input
        onChange={(e) => setNewHabitaciones(e.target.value)}
        value={newHabitaciones}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Habitaciones"
      />
      <input
        onChange={(e) => setNewBanos(e.target.value)}
        value={newBanos}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Baños"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update House
      </button>
    </form>
  );
}