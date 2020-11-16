import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { RestaurantContext } from "../context/context";
import { DisappearedLoading } from "react-loadingg";
import { MdPlace, MdStar } from "react-icons/md";
import Axios from "axios";

function NearbyRestaurant({ collection }) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgErr, setImgErr] = useState(null);
  // console.log("collection", collection);

  if (isLoading) {
    <DisappearedLoading />;
  }

  return (
    <>
      {" "}
      {collection.map((res) => {
        const item = res.restaurant;
        // console.log("item", item);
        return (
          <Card key={item.id} className=" nearbyRestaurant-card d-flex p-2">
            <img src={item.thumb} alt="" className="nearbyRestaurantImg mr-3" />
            <div className="nearbyRestaurantInfo py-2">
              <h5>{item.name}</h5>
              <div className="nearbyRestaurantInfo-location  ">
                {" "}
                <MdPlace className="nearbyRestaurantInfo-locationIcon" />{" "}
                <span>{item.location.address}</span>
              </div>
              <span className="nearbyRestaurantInfo-rating">
                <MdStar className="nearbyRestaurantInfo-rating-icon" />{" "}
                {item.rating} ({item.vote} rating){" "}
                <strong>{item.ratingText}</strong>
              </span>
            </div>
          </Card>
        );
      })}
    </>
  );
}

export default NearbyRestaurant;
