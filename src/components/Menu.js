import React, { useEffect, useState } from 'react';
import {MenuList} from '../Static Api/MenuList.js';
import Mininav from './Mininav.js';
import Cart from './Cart.js';
import "./Menu.css";
import Pizza from './Pizza.js';
import Sides from "./Sides.js";
import Beverages from "./Beverages.js";
import Swal from "sweetalert2";



export function PizzaElement({element,newarr,setNewarr,ad ,setAd, sub, setSub}){
    const[select,setSelect] = useState("regular");
    const[counter,setCounter] = useState(0);
    useEffect(() =>{
        if(element.id  === ad[1]){
            setCounter(counter => counter+1)
            
        }

    },[ad,element.id])

    useEffect(() =>{
        if(element.id === sub[1]){
            setCounter(counter => counter-1)
        }
    },[sub,element.id])
   

    function handlething(){
        const temp = {...element,selectedsize:select}
        setCounter(counter+1)
        setNewarr(prevItems =>[...prevItems,temp])
    }

    function handleincrease(){
        const temp = {...element,selectedsize:select}
        setCounter(counter+1)
        setNewarr(prevItems =>[...prevItems,temp])
    }

    function handledecrease(){
        function check(){
            const checkmap = new Map();
            let flag = true
            for(const item of newarr){
                if(item.id === element.id){
                    if(checkmap.has(item.id)){
                        if(checkmap.get(item.id) !== item.selectedsize) { 
                            flag = false;
                            break;}
                    }
                    else{
                        checkmap.set(item.id,item.selectedsize)
                    }
            }}
            if(flag)
                return true
            else return false}

    let ans = check()
    if(ans){
        setCounter(counter-1)
        let sign = true
        const updated = newarr.map((item)=>{
            if(sign && item.id === element.id){
                sign = false
                return null}
            else {return item} 
        
        })
        const reupdate = updated.filter((item) =>{
            return item !==null
        })
        setNewarr(reupdate)
    }
    else{
        Swal.fire({title : "Multiple customizations of this item are added to cart. Please remove item from cart.",
    allowOutsideClick : false});
    }
        
        
    }

    let cost = element.price

    return <div className='card'>
        <div  className = "image1" style={{backgroundImage : `url(${element.src})` }}></div>
        <p className='title'>{element.title}</p>
    {element.type === 'pizza' && (
    <div className='box'>
        <p>Size</p> 
        <span>{cost = element.sizes[select]}</span>
        <select  onChange={(e) => {setSelect(e.target.value)}}>
            <option value = "regular">Regular</option>
            <option value = "medium">Medium</option>
            <option value = "large">Large</option>
        </select>
        
        </div>)}
        <div className='bottom'>
        <p>₹{cost}</p>
        {counter>0 ? (<div><p onClick={handledecrease}>-</p>
        <p id = "special">{counter}</p>
        <p onClick={handleincrease}>+</p>
        </div>) :(<div onClick={handlething} >Add to cart</div>)}
        </div>
        </div>

}


 



export default function Menu({newarr,setNewarr,ad,setAd,sub,setSub,category,setCategory,ordered,setOrdered,setIsOrder,userData,setUserData}){
    

    let myMap = new Map();
    MenuList.forEach((cur) =>{
        myMap.set(cur.id,0)
            
    })
    
  
    
    return <div className='Menu' style = {{backgroundImage : `url(images/pizzamenu.jpg)`}}>
    <Mininav handlenav={(i) => {setCategory(i)}}/>
    <div className='supermain'>
    <div className='main'>   
    <Pizza id = "nav1" newarr = {newarr} setNewarr = {setNewarr} ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/>
    <Sides id = "nav2" newarr = {newarr} setNewarr = {setNewarr} ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/>
    <Beverages newarr = {newarr} setNewarr = {setNewarr} ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/>
               
    </div>
    
  
    <Cart setIsOrder={setIsOrder} userData={userData} setUserData={setUserData} ordered={ordered} setOrdered={setOrdered} cart = {newarr} setCart = {setNewarr}  ad = {ad} setAd = {setAd} sub = {sub} setSub = {setSub} category = {category} /> </div>
    </div>

}