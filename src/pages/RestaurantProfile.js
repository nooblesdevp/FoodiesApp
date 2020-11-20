import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/context";

const url = "https://developers.zomato.com/api/v2.1/restaurant?res_id=";

function RestaurantProfile() {
  const { restauranProfile } = useContext(RestaurantContext);
  const [isLoading, setIsLoading] = useState(false);
  const id = useParams();

  console.log("object", restauranProfile);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = Axios.get(`${url}/${id}`);
        console.log("data", data);
        if (restauranProfile) {
        }
      } catch (error) {}
    }
  }, [id]);

  return (
    <div>
      <h1>ini profile</h1>
    </div>
  );
}

export default RestaurantProfile;
