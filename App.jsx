import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

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

//header things ends

//body component start 

//making object of restaurants









//app layout
const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
     
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);