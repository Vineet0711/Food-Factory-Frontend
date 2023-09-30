import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import Contact from './components/Contact.js';
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Footer from './components/Footer.js';
import {Routes,Route} from "react-router-dom";
import './App.css';
import About from './components/About.js';

function App() {

  const[category,setCategory] = useState('pizza');
  const[newarr,setNewarr] = useState([]);
  const[ad,setAd] = useState([true,0])
  const[sub,setSub] = useState([true,0])
  const[isOrder,setIsOrder]=useState(false);
  const[ordered,setOrdered]=useState(false)
  const[userData,setUserData]=useState({
    fName:"",
    lName:"",
    email:"",
    mobile:"",
    location:""
  })

  const setInputValue=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value})
  }
  const OrderSubmit=(e)=>{
    e.preventDefault();
    const{fName,lName,mobile,email,location}=userData;
    if(fName==="")
      alert("First Name is required")
    else if(lName==="")
      alert("Last Name is required")
    else if(mobile==="")
      alert("Mobile is required")
    else if (email==="")
      alert("Email is required")
    else if(location==="")
      alert("Message is required")
    else{
      setOrdered(true);
      setIsOrder(false)
    }
  }
  const cancelSubmit=()=>{
    setIsOrder(false)
  }

  return (
    <div>{
       isOrder?<div className='orderAdd'>
          <div>
          <form>
            <p onClick={cancelSubmit}>x</p>
            <h3>Fill these details to deliver your orders</h3>
            <div>
              <label >First Name :</label>
              <input type='text' name='fName' id='fName' value={userData.fName} onChange={setInputValue} autoFocus required></input>
            </div>
            <div>
              <label >Last Name :</label>
              <input type='text' name='lName' id='lName' value={userData.lName} onChange={setInputValue} required></input>
            </div>
            <div>
              <label >Mobile :</label>
              <input type='text' name='mobile' id='mobile' value={userData.mobile} onChange={setInputValue}required></input>
            </div>
            <div>
              <label>Email :</label>
              <input type='text' name='email' id='email' value={userData.email} onChange={setInputValue} required></input>
            </div>
            <div>
              <label>location : </label>
              <input type='text' name='location' id='location' value={userData.location} onChange={setInputValue} required></input>
            </div>
            <button type='submit' onClick={OrderSubmit}>Order Now</button>
          </form>
          </div>
       </div>:""
      }
      <Navbar/>
      <Routes>
             <Route path = "/" exact element = {<Home/>} />
             <Route path = "/menu" exact element = {<Menu userData={userData} setUserData={setUserData} ordered={ordered} setOrdered={setOrdered} isOrder={isOrder} setIsOrder={setIsOrder} newarr = {newarr} setNewarr = {setNewarr} ad = {ad} setAd= {setAd} sub = {sub} setSub = {setSub} category={category} setCategory={setCategory}/>}/>
             <Route path ="/contact" exact element={<Contact/>}/>
             <Route path='/about' exact element={<About></About>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
