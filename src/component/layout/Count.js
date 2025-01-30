

export const AnswerSheet = ({contData,onClick})=>{
                         
      for(var i =0;i<=contData.length;i++){
          return(
              <>
                {contData.map((items,index)=>(
           <div key={index}>
              <ul>
                <li>{items.id}.)</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path1}`}>1</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path2}`}>2</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path3}`}>3</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path4}`}>4</li>
            {/* {console.log('------- '+index+' ---------')} */}
              </ul>
           </div>
                ))}
              </>
          )                         
      }                              
}