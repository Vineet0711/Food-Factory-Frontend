import React, { useState }  from "react";
import {Link as LinkScroll} from 'react-scroll';


 


export default function Mininav({handlenav}){
    const arr = ["pizza","Sides and Desserts","Beverages"]
    const ids = ["nav1","nav2","nav3"]
    const[isclick,setClick] = useState(0);
    return <nav className="outernav">
        {arr.map((n,index) =>{
               return  <LinkScroll activeClass="outernav"  to = {ids[index]}  spy ={true} smooth = {true}  key = {index} className={(isclick  === index)? "newnav" : "innernav"} onClick={() =>{handlenav(n);
                setClick(index);}}>{n} </LinkScroll>
        
        })}
    </nav>
}