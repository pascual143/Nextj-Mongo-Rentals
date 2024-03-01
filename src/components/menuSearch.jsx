'use client'

import { useState } from 'react';
import Link from 'next/link';

const search = e => {
    console.log(e.target.value)
    setSearch(e.target.value)
    if (search.length > 1) {
        const filterValues = data.map(row => {
            if (row.name.includes(e.target.value))
                return true
        })
    }
}

export default function MenuSearch() {
    cosnt[search, setSearch] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([])

    return (
        <>
            <div className='w-150'>
                <ul>
                    <li>
                        <label for="searchInput">Buscador</label>
                        <input
                            type='text'
                            placeholder="Search"
                            minlength="2"
                            maxlength="25"
                            value={search}
                            onChange={setSearch}
                        />
                    </li>
                    <li>
                        <input
                            type='number'
                            minlength="2"
                            maxlength="25"
                            placeholder="min" />
                    </li>
                    <li>
                        <input
                            type='number'
                            minlength="2"
                            maxlength="25"
                            placeholder="max" />
                    </li>
                    <li><input type='number' placeholder='habitaciones' /></li>
                    <li><input type='number' placeholder='baños' /></li>
                    <li>jardin, terraza...</li>
                </ul>
            </div>
        </>
    )
}