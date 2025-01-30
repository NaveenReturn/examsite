import React from "react";
import {useNavigate} from 'react-router-dom'

export default function Header(){
      const navigate = useNavigate();
      const Exam = ()=>{
           navigate('/getready')
      }
      const HomeCenter = ()=>{
           navigate('/')
      }
   return(
 <div className="nav-nav" >
         <div className="px-4 head-nav py-2 d-flex justify-content-between align-items-center">
           <div className="d-flex align-items-center">
            <img src="./img/tamil-nodu-logo.png" height={80} alt="tamil" />  
            <h6 className="ps-2">TAMIL NADU POLICE EXAM CENTER</h6>
           </div>
           <div>
              <h4>தமிழ்</h4>
           </div>
           <div className="d-flex">
              <p className="mx-3 p-1 btn" onClick={HomeCenter} >HOME</p>
              <p className="mx-3 p-1 btn" onClick={Exam} >Exam</p>
           </div>
        </div>   
        <div className="mt-1" style={{background:'#bbddec'}} >
           <marquee>
              <p>JR 2023 :     Preliminary answer keys for
                written examinations have been published on the website. Any representation regarding questions/answers should be sent to TNUSRB on or before 07.09.2023 by post only  </p>
           </marquee>
        </div>                         
    </div>                       
   )
}