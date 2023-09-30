import React, { useState } from 'react'
import './Contact.css'
import { sendFunction } from '../services/Apis'
import {useNavigate} from 'react-router-dom'

const Contact = () => {

  const navigate=useNavigate();

  const [inputData,setInputData]=useState({
    fName:"",
    lName:"",
    mobile:"",
    email:"",
    message:""
  }) 

  const setInputValue=(e)=>{
    const {name,value}=e.target;
    setInputData({...inputData,[name]:value})
  }

  const submitFunc= async (e)=>{
    e.preventDefault();
    const {fName,lName,mobile,email,message}=inputData;
    if(fName==="")
      alert("First Name is required")
    else if(lName==="")
      alert("Last Name is required")
    else if(mobile==="")
      alert("Mobile is required")
    else if (email==="")
      alert("Email is required")
    else if(message==="")
      alert("Message is required")
    else{
      const config={
        "Content-Type":"application/json"
      }
      const response= await sendFunction(inputData,config);
      if(response.status===201){
        setInputData({
          ...inputData,
          fName:"",
          lName:"",
          mobile:"",
          email:"",
          message:""
        })
        navigate('/');
        alert("We will get back to you soon!!")
      }
      else{
        alert("Couldn't save")
      }

    }
  }

  return (
    <div className='contact'>
      <form >
        <div>
          <p>First Name : </p>
          <input type='text' name='fName' value={inputData.fName} onChange={setInputValue} required autoFocus></input>
        </div>
        <div>
          <p>Last Name : </p>
          <input type='text' name='lName' value={inputData.lName} onChange={setInputValue} required ></input>
        </div>
        <div>
          <p>Mobile : </p>
          <input type='text' name='mobile' value={inputData.mobile} onChange={setInputValue} required ></input>
        </div>
        <div>
          <p>Email : </p>
          <input type='text' name ='email' value={inputData.email} onChange={setInputValue} required></input>
        </div>
        <p>Message For Us :</p>
        <textarea name='message' maxLength='200' value={inputData.message} rows='5' cols='35' placeholder='write messsage upto 200 characters long' onChange={setInputValue}></textarea>
        <button type='submit' onClick={submitFunc}>Send</button>
      </form>
    </div>
  )
}

export default Contact