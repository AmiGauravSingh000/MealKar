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
//header things start 
const Logo = () => {
    return (
        <a href="/">
        <div className="logo">
            <img src="MealKar_Logo.png" className="logoimg" alt="logo" />
            
        </div>
        </a>
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
//header things ends

//body component start 


const RestaurantLists = () =>{
    return (
        <div className="RestauLists">
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>        
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        <div className="restauCard">
            <img src="https://b.zmtcdn.com/data/pictures/9/21015679/6fc82acccbef1bb6093552eb533e51a6_featured_v2.jpg?output-format=webp" alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">ThaliWalla</span>
                <span className="Rating">⭐⭐⭐⭐</span>
                <h5>Indian, Chinese</h5>
                <h5>Secotor 7, Faridabad</h5>
            </div>
        </div>
        </div>

    );
}


const Body = () => {
    return(
        <div className="body">
        <RestaurantLists/>
        </div>
    );
};




//app layout
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <h2>Footer</h2>
        </>
     
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);