import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import  Footer  from "./Components/Footer";
import  Home from "./Pages/Home";
import bgImage from './Images/bg.png';

export default function App() {
return (
    <>
    <div className="min-h-screen w-full bg-top" style={{ backgroundImage:`url(${bgImage})` }}>
    <BrowserRouter>
        <Navbar />
        <HeroBanner />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
    </BrowserRouter>
    </div>
    </>
);
}