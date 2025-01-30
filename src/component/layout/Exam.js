import React,{useState} from "react";
import { AnswerSheet } from "./Count";


export default function ExamCenter(){

  //    const [userDate,setUserDate] = useState(
  //   [
  //     {
  //       id:1,
  //       question:'பின்வரும் ஆங்கில சொற்களுக்கு இணையான தமிழ்சொல்லை தேர்க',
  //       Answer:'நற்றிணை'
  //     },
  //     {
  //       id:2,
  //       question:'அகத்திணையும் புறத்திணையும் சேர்த்துக் கூறும் எட்டுத்தொகை நூல் எது',
  //       Answer:'பரிபாடல்'
  //     },
  //     {
  //       id:3,
  //       question:'தவறான இனணயைத் தேர்வு செய்க',
  //       Answer:'முல்லை----ஓதலாந்தையார்'
  //     },
  //     {
  //       id:4,
  //       question:'செல்வச் செவீலி-இலக்கணம் குறிப்பு',
  //       Answer:'உருவகம்'
  //     },
  //     {
  //       id:5,
  //       question:'இலக்கணம் குறிப்பு தருக: கங்கையும் சிந்துவும்',
  //       Answer:'எண்ணும்மை'
  //     },
  //   ]

  // )

  const [questions,setQuestions] = useState([
     {
        id:1,
        question:'பின்வரும் ஆங்கில சொற்களுக்கு இணையான தமிழ்சொல்லை தேர்க.',
        refquestion:'FAKE NEWS',
        path1:'சிறப்பு செய்தி',
        path2:'முக்கிய செய்தி',
        path3:'அச்சுப்படி',
        path4:'பொய்ச்செய்தி',
        Answer:'பொய்ச்செய்தி'                           
     }, 
     {
        id:2,
        question:'CONSUMER',
        path1:'வாடிக்கையாளர்',
        path2:'நுகர்வோர்',
        path3:'பொருள் வாங்குபவர்',
        path4:'விற்பனையாளர்',
        Answer:'நுகர்வோர்',
        refquestion:''                           
     },
       {
        id:3,
        question:'CAR',
        path1:'கார்',
        path2:'நான்கு சக்கரவண்டி',
        path3:'சிறிய வண்டி',
        path4:'மகிழுந்து',
        Answer:'மகிழுந்து',
        refquestion:''                           
     },     
     {
      id:4,
      question:'செல்வச் செவீலி-இலக்கணம் குறிப்பு',
      path1:'உவமை',
      path2:'அடுக்குததொடர்',
      path3:'எண்ணும்மை',
      path4:'உருவகம்',
      Answer:'உருவகம்',
      refquestion:''                           
   },
   {
    id:5,
    question:'இலக்கணம் குறிப்பு தருக: கங்கையும் சிந்துவும்',
    path1:'உம்மைத்தொகை',
    path2:'பெண்பால் பெயர்கள்',
    path3:'எண்ணும்மை',
    path4:'அன்மொழித்தொகை',
    Answer:'எண்ணும்மை',
    refquestion:''                           
 },                                                                                                                  
  ])
  const [subb,setSub] = useState(false)
  const storeAry = [];
  let sub = 0;
  const onClick = (e)=>{

        let clss = e.target;
       let col  = clss.getAttribute('class');
      //  console.log(col.includes('black'))
       let getNext = e.target;
   
      if(!col.includes('black')){
        if(!storeAry.includes(col)){
          storeAry.push(col)
       //  getNext.setAttribute('class','black')
       // if()
        let face = getNext.classList;
        face.add('black')
        sub++;
     }else{
        alert('sorry alrady this question answer');

     }
      }else{
        alert('sorry alrady this question answer');
      }



  }
  const [count,setCount] = useState('')
const onSubmit = ()=>{
  //  let ff = document.querySelectorAll('h5');
  //  console.log(ff.length)
     if(sub == questions.length){
         overall();

     }else{
       alert('filed missing please click')
     }
}
const overall = ()=>{
 setCount('ans')
 setSub(true)
 alert('successfull submit')
}
  
    return(
       <>
         <div className="exam-exam">
        <div className="headline d-flex justify-content-center" >
                 <img src="./img/new.gif" height={40} alt="police" />
                    <h3 className="py-1">காவலர் தேர்வு Random Question Paper 2023</h3> 
                      <img src="./img/tn-cap.png" height={40} alt="police" />
                </div>  
        <div className="d-flex justify-content-between">                          
             <div className="exam-question ps-1">
                  {questions.map((items,index)=>(
                     <div key={index}>
                       <div><h5 className="py-2"><span className="px-2">{items.id}</span>{items.question}</h5></div>
                     <h5>{items.refquestion}</h5>     
         <ol className="d-flex justify-content-between ms-2">
             <li className={`${items.path1 == items.Answer && count =='ans'?'yes':''}`}>{items.path1}</li>
             <li className={`${items.path2 == items.Answer && count =='ans'?'yes':''}`}>{items.path2}</li>
             <li className={`${items.path3 == items.Answer && count =='ans'?'yes':''}`}>{items.path3}</li>
             <li className={`${items.path4 == items.Answer && count =='ans'?'yes':''}`}>{items.path4}</li>
          </ol>

           <div className="exam-anwer">
           <ul className=" d-flex justify-content-between ms-2">
               
                 <li onClick={onClick} className={`${index}`} id={`${items.path1}`}>1</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path2}`}>2</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path3}`}>3</li>
                 <li onClick={onClick} className={`${index}`} id={`${items.path4}`}>4</li>
            {/* {console.log('------- '+index+'
            
            
            
            ---------')} */}
              </ul>
            </div>




                     </div>              
                  ))}
          <div className="sub d-flex justify-content-center">
               <input type="button" disabled={subb} className="ms-4 btn btn-primary" onClick={onSubmit} value={'submit'} />
              </div>
             </div>
             {/* <div className="exam-anwer">
                  <div>
                      <AnswerSheet contData={questions} onClick={onClick} />            
                  </div>
              <div className="sub d-flex justify-content-center">
               <input type="button" disabled={subb} className="ms-4 btn btn-primary" onClick={onSubmit} value={'submit'} />
              </div>
             </div> */}
        </div>
         </div>
       </>                            
    )
}