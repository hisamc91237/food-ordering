import React, { useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantList } from '../mockData';
import { useState } from 'react';
import Shimmer from './Shimmer';

function Body() {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
    );

    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="filter-btn">
          <div className="search">
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                let filteredRestaurants =
                  listOfRestaurants &&
                  listOfRestaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(inputText.toLowerCase()),
                  );
                setfilteredRestaurants(filteredRestaurants);
              }}
              className="login-btn1"
            >
              Search
            </button>
          </div>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4,
              );
              setlistOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Body;
