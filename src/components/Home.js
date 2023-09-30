import React from 'react';
import "./Home.css";
import {TypeAnimation} from 'react-type-animation';
import {Link } from 'react-router-dom'

function Image(){

    return <div className='image'  style = {{backgroundImage : `url(images/pizzaad.jpg)`}}> </div>
}

export default function Home(){

    return <div className='background' style = {{backgroundImage:`url(images/pizzaback.jpg)`}}>
        <div className='container'> 
        <h1> Newt's Pizzeria</h1>
        <Image/>
        <TypeAnimation sequence={["",100,"Give" , 1000,"Give Life" ,1000, "Give Life A", 1000,"Give Life A Slice",1000,]}
    repeat = {Infinity}
    className='animation'
    preRenderFirstString = {false}
    wrapper='div'
    />
    <Link className='orderBtn' to='/menu'><button>Order Now</button></Link>
  </div>
        </div>
}