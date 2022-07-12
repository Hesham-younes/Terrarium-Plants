import React, {useState } from 'react'
import axios from 'axios'
import './resetpassStyle.css'

const ForgetPassword = () => {
const [email,setEmail] = useState('')
const [data,setData] = useState('')
const  resetPassword = async (e) => {
   e.preventDefault()
   
   let bodyContent = JSON.stringify({
    "email": email
});
  let reqOptions = {
    url: "http://localhost:8000/api/reset/forget-password",
    method: 'POST',
    headers :{
      "Content-Type": "application/json" 
    },
    data : bodyContent
  }

  axios.request(reqOptions).then(function (response) {
    console.log(response);
    setData(response.data)
  })
  
}
  return (
    <div className="reset-pass-container">
      <div className="reset-pass-box">
         <h1>Reset Password</h1>
         {data && <p>{data}</p>}
        <form onClick={(e)=>resetPassword(e)} method='post'>
            <input type="email" value={email || ''} name="email"  
            id="email" placeholder="type your Email"
            onChange={(e)=> setEmail(e.target.value)}/>
            <br />
            <input type="submit" value="submit" />
        </form>
        </div>
    </div>  
  )
}

export default ForgetPassword