import React from "react";
import { IMG_CDN_URL } from "../../config";
import {RestaurantList} from "../../config";



const RestaurantCard = ({name,
    cloudinaryImageId,
    cuisines,
    lastMileTravelString,
    avgRating,}) =>{
    return (
            <div className="restauCard">
            <img src= { IMG_CDN_URL +
          cloudinaryImageId} alt="RestImg" />
            <div className="RestuContent">
                <span className="RestauName">{name}</span>
                <span style={avgRating > 3 ? {color:"green"}:{color:"red"} } className="Rating">{avgRating}</span>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{lastMileTravelString} minutes</h5>
            </div>
        </div> 
                    


    );
}
export default RestaurantCard;