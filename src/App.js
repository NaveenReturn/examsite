import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./component/layout/Header";
import Home from "./component/Home";
import ExamCenter from "./component/layout/Exam";
import Carousels from "./component/layout/Carousel";
import RowSlice from "./component/layout/demo";





export default function App() {

   return (
    <BrowserRouter>
    <div>
      <Header/>
         <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/getready" element={<ExamCenter/>} />
         </Routes>

   </div>
    </BrowserRouter>
    
  )
}

