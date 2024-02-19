import React from "react";
import ReactDOM from "react-dom/client";
import { FaSearch } from "react-icons/fa";


{
/**
 
 structure of my header 
   1. Logo
   2. navbar
        - Home
        - Restaurants
        - About us
        - contact
    3. Search Bar
*/ } 

const Logo = () => {
    return (
        <div className="logo">
            <img src="MealKar_Logo.png" className="logoimg" alt="logo" />
            
        </div>
    );
}

const SearchBar = () => {
    return (
        <div className="search-div">
            <input type="text" placeholder="Searching..." />
            <FaSearch className="search-icon" />
        </div>
    );
}

const NavItems = () => {
    return (
        <ul className="navList">
            <li>Home</li>
            <li>About</li>
            <li>Restaurants</li>
            <li>Contact Us</li>
            <li>Order Now</li>
        </ul>
    );
}

const Authenti = () => {
    return (
        <div className="authButtons">
            <button className="Login">Log in</button>
            <button className="Signin">Sign in</button>

        </div>
    );
}
const Header = () =>{
    return (
        <div className="container">
         {<Logo/>}
        {<SearchBar/>}
        {<NavItems/>}
        {<Authenti/>}


         </div>
       
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header/>);