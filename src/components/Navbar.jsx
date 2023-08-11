import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-4 border-b-2'>
        <ul className='flex space-x-4'>
            <li>
                <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            </li>
            <li>
                <Link to="/Form" className="text-blue-500 hover:underline" > Form</Link>
            </li>
            <li>
                <Link to="/details" className="text-blue-500 hover:underline" > Detail</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
