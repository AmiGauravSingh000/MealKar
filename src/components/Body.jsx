import React from "react";
import obj from "./RestaurantCard";



const Body = () => {

    return(
    
      <>

        <div className="body">
      {obj.RestaurantList.map((restaurant) => {
        return <obj.RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
        </div>
      </>

    );
};

export default Body;
