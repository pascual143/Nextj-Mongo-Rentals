'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function HousesList() {
    const [houses, setHouses] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const getHouses = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/houses", {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch houses");
                }

                const data = await res.json();
                setHouses(data.houses);
            } catch (error) {
                console.log("Error loading houses: ", error);
            }
        };

        getHouses();
    }, []);

    const filteredHouses = houses.filter((house) =>
        house.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <>
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    {/* Searcher */}
                    <div className="">
                        <div className="">
                            <input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Buscar"
                                className="border border-gray-200 rounded-md p-2 m-3"
                            />
                            <input
                                type="text"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Precio"
                                className="border border-gray-200 rounded-md p-2 m-3"
                            />
                        </div>
                    </div>
                    {/* Card */}
                    <div className="flex flex-wrap gap-4">
                        {filteredHouses.map((h) => (
                            <div
                                key={h._id}
                                className="house-card border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-4 min-w-[15rem] md:min-w-[20rem] lg:min-w-[20rem]"
                            >
                                <div>
                                    <h2 className="font-bold text-2xl">{h.title}</h2>
                                    <div>{h.description}</div>
                                    <div>{h.precio}</div>
                                    <div>{h.habitaciones}</div>
                                    <div>{h.baños}</div>
                                </div>
                                <div className="flex gap-2">
                                    <RemoveBtn id={h._id} />
                                    <Link href={`/editHouse/${h._id}`}>
                                        <HiPencilAlt size={24} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}