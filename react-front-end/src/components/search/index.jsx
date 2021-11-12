import React, {useState} from 'react'

export default function Search({users, setUsers, searchResult, setSearchResult}) {

    return (
        <form>
            <div>
                <input
                placeholder="Search"
                product="product"
                type="text"
                className="form-control"
                value={searchResult}
                onChange={(event) => setSearchResult(event.target.value)}
                />
            </div>
        </form>
    )
}