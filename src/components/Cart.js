import "./Cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { sendOrder } from "../services/Apis";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";



function Cartrender({item,cart,setCart,ad ,setAd, sub, setSub}){

    function handleminus(){
        let flag = true
        const predelete = cart.map((prod) =>{
            if(flag && prod.id === item.id && prod.selectedsize === item.actualsize){  
                flag = false
                return null}
            else{
                return prod
            }
        
        })
        const afterdeletion = predelete.filter((e)=>{
            return e !==null
        }) 
        setCart(afterdeletion)
        const newcopy = sub.map((e,index) =>{
            if(index === 0){
                return !e }
            else{
                return item.id 
            }
        })
        setSub(newcopy)
    }

    function handleplus(){
        const copy = {...item}
        copy.selectedsize = item.actualsize;
        delete copy.actualsize;
        delete copy.quantity;
        const updatecart = [...cart,copy]
        setCart(updatecart)
        const newcopy = ad.map((e,index) =>{
            if(index === 0){
                return !e }
            else{
                return item.id 
            }
        })
        setAd(newcopy)
      

    }
    return <div className="cart">
        <div className="cart1">
            <img src = {item.src} alt = {item.title} className="minimage"/>
            <div className="cart1-inner">{item.title}
            {item.sizes && <p>{item.actualsize}</p>}</div>
        </div>
    <div className="cart2">
    <div className="cartbuttons">{item.quantity === 1 ? <div className = "cart-ton" onClick={handleminus} ><DeleteIcon/></div> : <div className = "cart-ton" onClick={handleminus} >-</div>}
    <p className="cart-ton">{item.quantity}</p>
    <div className = "cart-ton"onClick={handleplus}>+</div>
    </div>
    {item.sizes ? (
            <div className="price"> ₹{item.quantity * item.sizes[item.actualsize]}.00</div>
    ):(
        <div className="price"> ₹{item.quantity * item.price}.00</div>
    )} </div>

    </div>
}



export default function Cart({cart,setCart,ad ,setAd, sub, setSub,category,ordered,setOrdered,setIsOrder,userData,setUserData}){
    const itemdict = new Map();
    const navigate=useNavigate();
    cart.forEach((item) => {
        if(itemdict.has(item.id)){
            if(item.selectedsize === null){
                itemdict.set(item.id,itemdict.get(item.id)+1)
            }
            else{
                if(itemdict.get(item.id).has(item.selectedsize)){
                        itemdict.set(item.id,itemdict.get(item.id).set(item.selectedsize,itemdict.get(item.id).get(item.selectedsize)+1))}
                else{
                    itemdict.set(item.id,itemdict.get(item.id).set(item.selectedsize,1))  
                }
            }
        }
        else{
            if(item.selectedsize === null){
                itemdict.set(item.id,1)
            }
            else{
               const need  = new Map();
               need.set(item.selectedsize,1)
               itemdict.set(item.id,need) 
            }
        }
         
    });
    const tempmap = new Map();
    const finalcart = []
    cart.map((item) =>{
        if(tempmap.has(item.id)){
            return null
        }
        else{
            itemdict.get(item.id).forEach((v,k) =>{
                const modify = {...item,actualsize:k,quantity:v}
                finalcart.push(modify)
            })
            tempmap.set(item.id,1)
            return null
        }
    })
   
    let count = 0;
    let total = 0;

    useEffect(()=>{
        if(ordered){
            sendData();
        }
    },[ordered])

    const getAdd=()=>{
        setIsOrder(true)
    }
    
    const sendData=async()=>{
        if(finalcart.length>0){
            const data={
                fName:userData.fName,
                lName:userData.lName,
                mobile:userData.mobile,
                email:userData.email,
                location:userData.location,
            items:finalcart
            }
            let config={
            "Content-Type":"application/json"
            }
            const response = await sendOrder(data,config);
            if(response.status===201)
            {
                setUserData({
                    ...userData,
                    fName:"",
                    lName:"",
                    email:"",
                    mobile:"",
                    location:""
                })
                setCart([]);
                setOrdered(false);
                navigate('/')
            }
            else{
                console.log(response.status)
            }
        }
    }

    return (
        <div className="pcart">
        <div className="cartplace">
            {finalcart.length !==  0  ? 
            (finalcart.map((item) =>{ 
                count += item.quantity;
                item.sizes ? (total += ((item.sizes[item.actualsize]) * item.quantity )) : (total += (item.price *item.quantity))
              return <Cartrender item = {item} cart = {cart} setCart = {setCart} ad = {ad} setAd = {setAd} sub = {sub} setSub = {setSub}  category = {category}/>
            })) :
            <div className="empty-cart">
                <div className="shit"><img src = "images/bag.jpg"  alt = "bag"/></div>
                <p id = "firsttext">Your Cart Is Empty</p>
                <p>Please add some items from the menu.</p>
            </div>}
        </div>
        {finalcart.length !== 0 && <div className="checkout">
            <div className="inner-checkout"> <p>{count} items</p>
            <p>₹{total}.00</p> </div>
            <div className="inner2-checkout" onClick={getAdd}>Checkout </div>
            </div>}
        </div>

    )
}