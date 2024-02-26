import React from "react";
import { ReactDOM } from "react-dom/client";
import { FaSearch } from "react-icons/fa";
const Logo = () => {
    return (
        <a href="/">
        <div className="logo">
            <img src="MealKar_Logo.png" className="logoimg" alt="logo" />
            
        </div>
        </a>
    );
}
const searchbar = "nothing";
const SearchBar = () => {
    return (
      <>
         <div className="search-div">
            <input type="text" placeholder="Searching..." 
            defaultValue= {searchbar}/>
            <FaSearch className="search-icon" />
        </div>
        </>
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
        <div className="container" key={1}>
         {<Logo/>}
        {<SearchBar/>}
        {<NavItems/>}
        {<Authenti/>}
         </div>
       
    );
}
export default Header;