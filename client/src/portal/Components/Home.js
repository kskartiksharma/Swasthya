import React from 'react'
import Navbar from './Navbar';
import Poster from './Poster';
import Sec3 from './Sec3';
import "./portal.css";
import MainProduct from './MainProduct';
// import SmallPoster from './SmallPoster';
import Footer from './Footer';
import About from './About';
import Contact from './Premises';

export default function Home({}) {
  
  return (
      <>
        <Poster/>
        <MainProduct/>
        <Sec3 />
        <About/>
        <Contact/>
        <Footer/>
      </>
       
  )
}


