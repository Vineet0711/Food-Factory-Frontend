import React from "react";
import { MenuList } from "../Static Api/MenuList";
import {PizzaElement} from "./Menu.js"
import "./Menu.css"


const pizzarr = MenuList.filter((food) =>{
        return food.type === "pizza";
})
 

export default function Pizza({newarr,setNewarr,ad,setAd,sub,setSub}){
    return  (<div> 
    <div className="heading" id = 'nav1'> Pizza</div>
    <div className='ultimate' >
        {pizzarr.map((element) =>{
        return (
           <div className='placemenu'> <PizzaElement key = {element.id} element = {element} newarr = {newarr} setNewarr = {setNewarr}
           ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/> </div>
    )})}
</div>
</div>)
} 