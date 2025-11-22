import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import  Footer  from "./Components/Footer";
import  Home from "./Pages/Home";
import bgImage from './Images/bg.png';

export default function App() {
return (
    <> 
    <BrowserRouter>
    <div className="min-h-full h-auto w-full bg-top bg-cover gb-center bg-no-repeat  relative" style={{ backgroundImage:`url(${bgImage})` }}>
    
        <Navbar />
        <div className="pt-20 pb-40">
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
);
}