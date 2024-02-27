import React from "react";



 

const Logo = () => {
    return (
        <a href="/">
        <div className="logo">
            <img src="MealKar_Logo.png" className="logoimg" alt="logo" />
            
        </div>
        </a>
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
        {<NavItems/>}
        {<Authenti/>}
         </div>
       
    );
}
export default Header;