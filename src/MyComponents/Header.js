import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Header(props) {
  return (
    <>
    <header className='header'>
      <nav>
        <ul>
          <li>
            <Link className='hdr-link' to="/calc">Calculator</Link>
            <Link className='hdr-link' to="/currency">Currency</Link>
            <Link className='hdr-link' to='/weather'>Weather</Link>
            <Link className='hdr-link' to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>   
  )
}
