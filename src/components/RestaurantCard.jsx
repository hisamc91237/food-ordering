import React from 'react';
import { IMG_URL } from '../constants';

function RestaurantCard({ resData }) {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <>
      <div className="res-card">
        <img
          className="res-logo"
          src={IMG_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} stars</h3>
      </div>
    </>
  );
}

export default RestaurantCard;
