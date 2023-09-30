import React from "react";
import { MenuList } from "../Static Api/MenuList";
import {PizzaElement} from "./Menu.js"
import "./Menu.css"


const beverages = MenuList.filter((food) =>{
        return food.type === "Beverages";
})
 

export default function Beverages({newarr,setNewarr,ad,setAd,sub,setSub}){
    return(<div>
    <div className = "heading" id = "nav3"> Beverages</div>
         <div className='ultimate'>
        {beverages.map((element) =>{
        return (
           <div className='placemenu'> <PizzaElement key = {element.id} element = {element} newarr = {newarr} setNewarr = {setNewarr}
           ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/> </div>
    )})}
</div>
</div>)}