import React, {useState} from "react"
import Orbits from "../visual/orbits"

export default function Register({setUsers, setOrbits}) {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [number, setNumber] = useState('')

    const registerNumber = () => {
        setUsers(prev => {
            return [...prev, {first, last, number}]
        })
    }

    const addOrbit = () => {
        setOrbits(prev => {
            return [...prev, <Orbits/>]
        })
    }

    return (
        <form className="input-group" onSubmit={(event) => event.preventDefault()}>
            <div className="input-group">
            <input
            placeholder="first name"
            product="product"
            type="text"
            className="form-control"
            value={first}
            onChange={(event) => setFirst(event.target.value)}
            />
            <input
            placeholder="last name"
            product="product"
            className="form-control"
            type="text"
            value={last}
            onChange={(event) => setLast(event.target.value)}
            />
            <input
            placeholder="number"
            product="product"
            className="form-control"
            type="text"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            />
            <button className="btn btn-outline-light" type="submit" onClick={() => {
                registerNumber()
                addOrbit()
            }}>submit</button>
            </div>
        </form>
    )
}