import React from "react";


export default function RowSlice(){
  const array = [];
  const onClick = (e)=>{
       
       let getNext = e.target.getAttribute('class');
        
       if(!array.includes(getNext)){
           array.push(getNext)
           alert('success')
       }else{
        alert('already click')
       }
  }      
    const Sub = ()=>{
         console.log(array)
    }

  return(
     <>
       <div className="list-items px-3">
              
            <ul className="d-flex justify-content-between">
               <li onClick={onClick} className="1">1</li>
               <li onClick={onClick} className="1">2</li>
               <li onClick={onClick} className="1">3</li>
               <li onClick={onClick} className="1">4</li>                    
            </ul>  
            <ul className="d-flex justify-content-between">
               <li onClick={onClick} className="2">1</li>
               <li onClick={onClick} className="2">2</li>
               <li onClick={onClick} className="2">3</li>
               <li onClick={onClick} className="2">4</li>                    
            </ul>  
            <button onClick={Sub}>SUBMIT</button>                    
       </div>
     </>                              
  )
}