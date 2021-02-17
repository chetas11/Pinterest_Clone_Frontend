import React from 'react'
import Navbar from './Navbar'

export default function Expired() {
    return (
        <>
        <Navbar />
        <div className="text-center mt-5">
            <h1>Sorry, link has expired 😟</h1>
            <h1>Please try again</h1>
        </div>
        </>
    )
}
