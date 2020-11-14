import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { RestaurantContext } from "../context/context";
import { DisappearedLoading } from "react-loadingg";
import { MdPlace, MdStar } from "react-icons/md";
import Axios from "axios";

function NearbyRestaurant({ res }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgErr, setImgErr] = useState(null);
  console.log("re", res);

  const id = res.restaurant.R.res_id;
  const img = res.restaurant.thumb;
  const name = res.restaurant.name;
  const location = res.restaurant.location.address;
  const rating = res.restaurant.user_rating.aggregate_rating;
  const ratingText = res.restaurant.user_rating.rating_text;
  const vote = res.restaurant.user_rating.votes;

  useEffect(() => {
    if (img === null) {
      Axios.get("https://via.placeholder.com/90").then((res) => {
        setImgErr(res);
      });
    }
  }, [img]);

  if (isLoading) {
    <DisappearedLoading />;
  }

  return (
    <div className="nearbyRestaurant">
      <Card key={id} className=" nearbyRestaurant-card d-flex p-2">
        <img
          src={!img ? imgErr : img}
          alt=""
          className="nearbyRestaurantImg mr-3"
        />
        <div className="nearbyRestaurantInfo py-2">
          <h5>{name}</h5>
          <div className="nearbyRestaurantInfo-location  ">
            {" "}
            <MdPlace className="nearbyRestaurantInfo-locationIcon" />{" "}
            <span>{location}</span>
          </div>
          <span className="nearbyRestaurantInfo-rating">
            <MdStar className="nearbyRestaurantInfo-rating-icon" /> {rating} (
            {vote} rating) <strong>{ratingText}</strong>
          </span>
        </div>
      </Card>
    </div>
  );
}

export default NearbyRestaurant;
