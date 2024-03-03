'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import SingleHouseCard from "./SingleHouseCard";

export default function HousesList() {
    const [houses, setHouses] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

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
        house.title.toLowerCase().includes(searchText.toLowerCase()) &&
        house.precio >= minPrice &&
        house.precio <= (maxPrice || Number.MAX_SAFE_INTEGER)
    );

    return (
        <>
            <div className="container">
                <div className="flex flex-col md:flex-row">
                    {/* Searcher */}
                    <div className="max-w-64">
                        <label htmlFor="Buscar" className="mx-3">Qué estás buscando?</label>
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Buscar"
                            className="border border-gray-200 rounded-md p-2 m-3"
                        />
                        <label htmlFor="Precio Mínimo" className="mx-3">Precio Mínimo</label>
                        <input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(parseInt(e.target.value))}
                            placeholder="Precio Mínimo"
                            className="border border-gray-200 rounded-md p-2 m-3"
                        />
                        <label htmlFor="Precio Máximo" className="mx-3">Precio Máximo</label>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                            placeholder="Precio Máximo"
                            className="border border-gray-200 rounded-md p-2 m-3"
                        />
                    </div>
                    {/* Card */}
                    <div className="flex flex-wrap gap-4">
                        {filteredHouses.map((house) => (
                            <Link key={house._id} href={`/houseCard/${house._id}`} legacyBehavior>
                                <a>
                                    <SingleHouseCard house={house} />
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}