import React from 'react'
import image from "./img/screen3.png";
import "./screen2.css";
import "./screen3.css";

const LoginSuccess = () => {
  return (
    <div className='logo2  '>
      <div className='logo3'>
    <img src={image} alt="Image loading" />
      </div>
    <div className='screen3h'>
    <h1>Welcome to AdmitKard</h1>

    </div>
    <div  className='screen3-para'>
    <p>In order to provide you with a custom experience,</p>
    <div className='screen3-para2'>
    <p>we need to ask you a few questions.</p>
    </div>
    </div>
    <button  className="btn-screen3">      
              <span>Get  Started</span>
     </button>
     <div className='screen3-para3'>
     <p>*This will take 5 min</p>
     </div>
    </div>
  )
}

export default LoginSuccess