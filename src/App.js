import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import  Footer  from "./Components/Footer";
import  Home from "./Pages/Home";

export default function App() {
return (
<BrowserRouter>
<Navbar />
<HeroBanner />



<Routes>
<Route path="/" element={<Home />} />
</Routes>

<Footer />
</BrowserRouter>
);
}