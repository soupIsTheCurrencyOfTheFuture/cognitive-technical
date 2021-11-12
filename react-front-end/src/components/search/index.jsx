import React, {useState} from 'react'

export default function Search({users, setUsers, searchResult, setSearchResult}) {

    return (
        <form>
            <input
            placeholder="Search"
            product="product"
            type="text"
            value={searchResult}
            onChange={(event) => setSearchResult(event.target.value)}
            />
        </form>
    )
}