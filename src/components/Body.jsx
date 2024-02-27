import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../config";
import shortid from "shortid";
import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [searchTxt, setSearchText] = useState("");
  // Use state to hold filtered restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState(RestaurantList);

  // Function to filter restaurants based on search text
  const filteredData = (searchText) => {
    if (!searchText.trim()) {
      // If search text is empty, display all restaurants
      setFilteredRestaurants(RestaurantList);
    } else {
      // Filter restaurants based on search text
      const filteredData = RestaurantList.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filteredData);
    }
  };

  return (
    <>
      <div className="body">
        <div className="search-div">
          <input
            type="text"
            id="inputText"
            placeholder="Searching... "
            onChange={(e) => {
              setSearchText(e.target.value);
              filteredData(e.target.value); // Update filtered restaurants on each change
            }}
            value={searchTxt}
          />
          <FaSearch
            onClick={() => {
              // Need to filter the data
              filteredData(searchTxt);
            }}
            className="search-icon"
          />
        </div>

        {/* Render filtered restaurants */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={shortid.generate()} />
        ))}
      </div>
    </>
  );
};

export default Body;
