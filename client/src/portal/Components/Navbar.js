import React,{useState,useEffect} from 'react'
import symbol from "../images/logo.png"

export default function Navbar() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };
  // const test = window.location.href;
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to top, rgb(23, 123, 137) 2%, #27273c 80%)');
  const[color,setColor] = useState('white')
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 80) {
      setBackgroundColor('white');
      setColor("black")
    } else {
      setBackgroundColor('linear-gradient(to top, rgb(23, 123, 137) 2%, #27273c 80%)');
      setColor("white")
    }
  };
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light  fixed-top " style={{background: backgroundColor,zIndex:"9999999999999"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={symbol} width="140" height="50"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link  nav-items" aria-current="page" href="./" style={{color: color}}>Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link nav-items" href="#Services" tabindex="-1" style={{color: color}}>Services</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link nav-items" href="#Features" style={{color: color}}>Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-items" href="#Premises" tabindex="-1" style={{color: color}}>Premises</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-items" href="#About" style={{color: color}}>About Us</a>
        </li>
        
      </ul>
      <div className='ms-auto text-center'>
      {isLoggedIn == "true" ? <a class="my-num" onClick={logOut} tabindex="-1" >Logout</a> : 
      <a class="my-num" href="/sign-in" tabindex="-1" >Login</a>}
        </div>
    </div>
    
  </div>
</nav>
  )
}
