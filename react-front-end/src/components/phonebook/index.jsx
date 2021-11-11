import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Phonebook({setUsers, users}) {

    useEffect(() => {
        axios.get('/api/data')
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])

    const mappedUsers = users.map((element) => {
        return (
            <tr key={element.first}>
                <td>{element.first}</td>
                <td>{element.last}</td>
                <td>{element.number}</td>
            </tr>
        )
    })

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {mappedUsers}
            </tbody>
        </table>
    )
}