import React from "react";
import { MenuList } from "../Static Api/MenuList";
import {PizzaElement} from "./Menu.js"
import "./Menu.css"


const sides = MenuList.filter((food) =>{
        return food.type === "Sides and Desserts";
})
 

export default function Sides({newarr,setNewarr,ad,setAd,sub,setSub}){
    return(<div>
    <div className="heading"  id = "nav2"> Sides And Desserts </div>
         <div className='ultimate'>
        {sides.map((element) =>{
        return (
           <div className='placemenu'> <PizzaElement key = {element.id} element = {element} newarr = {newarr} setNewarr = {setNewarr}
           ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub}/> </div>
    )})}
</div>
</div>)
}