import React from 'react'
import Spinner from './Spiner.gif'
export default function Loader() {
    return (
        <div className="fp-container">
            <img src={Spinner} className="fp-loader" alt="Loading, Please wait..." />
        </div>
    )
}
