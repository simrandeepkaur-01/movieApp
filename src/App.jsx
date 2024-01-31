import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Search from "./components/header/Search";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}