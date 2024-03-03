'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineTrash, HiPencilAlt } from "react-icons/hi";

export default function SingleHouseCard({ house }) {
  const router = useRouter();

  const removeHouse = async () => {
    const confirmed = confirm("¿Estás seguro de eliminar esta casa?");

    if (confirmed) {
      try {
        const res = await fetch(`/api/houses/${house._id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Reemplazar con la lógica de autenticación
          },
        });

        if (res.ok) {
          router.push("/houses"); // Redirigir a la página de casas después de eliminar
        } else {
          console.error("Error al eliminar la casa:", res.statusText);
        }
      } catch (error) {
        console.error("Error durante la eliminación:", error);
      }
    }
  };

  return (
    <div className="house-card border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-4 min-w-[20rem]">
      <div className="flex justify-between items-center">
        <h1>{house.title}</h1>
        <div className="flex gap-2">
          <button onClick={removeHouse} className="text-red-400">
            <HiOutlineTrash size={24} /> Eliminar
          </button>
          <Link href={`/editHouse/${house._id}`} legacyBehavior>
            <a className="text-blue-400">
              <HiPencilAlt size={24} /> Editar
            </a>
          </Link>
        </div>
      </div>
      <div>
        <p>{house.description}</p>
        <p>Precio: {house.precio}</p>
        <p>Habitaciones: {house.habitaciones}</p>
        <p>Baños: {house.baños}</p>
      </div>
    </div>
  );
};