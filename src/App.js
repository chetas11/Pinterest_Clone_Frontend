import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'

import './App.css'


export default function App() {
    return (
        <div>
            <Home />  
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#react-root"))
