import React, {useState} from "react"

export default function Register({setUsers}) {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [number, setNumber] = useState('')

    const registerNumber = () => {
        setUsers(prev => {
            return [...prev, {first, last, number}]
        })
    }

    return (
        <form className="search-form" onSubmit={(event) => event.preventDefault()}>
            <input
            placeholder="first name"
            product="product"
            type="text"
            value={first}
            onChange={(event) => setFirst(event.target.value)}
            />
            <input
            placeholder="last name"
            product="product"
            type="text"
            value={last}
            onChange={(event) => setLast(event.target.value)}
            />
            <input
            placeholder="number"
            product="product"
            type="text"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            />
            <button className="search-button" type="submit" onClick={registerNumber}>submit</button>
        </form>
    )
}