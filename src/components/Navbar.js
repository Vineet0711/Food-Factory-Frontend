import React, { useState } from 'react';
import './Navbar.css';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { Link } from 'react-router-dom';

export default function Navbar(){
    const[bar,setbar] = useState(false);

    return <div className = "navbar" id = {(bar) ? 'open' : 'close'}>
        <div className = "leftnav">
            <img src = "../images/pizzaLogo.png" alt = "LOGO" className='logo'/>
        </div>

        <div className = "rightnav">
            <ul>
                <Link to = "/">Home</Link>
                <Link to = "/menu">Menu</Link>
                <Link to = "/about">About </Link>
                <Link to = "/contact">Contact</Link>
            </ul>
            <button onClick={() => {setbar(!bar)}}> <TocOutlinedIcon/> </button>

        </div>
    </div>
}