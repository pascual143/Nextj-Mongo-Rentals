"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeHouse = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/houses?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh(); //to refresh the page when delete a topic
      }
    }
  };

  return (
    <button onClick={removeHouse} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}