import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "../context/context";

const url = "https://developers.zomato.com/api/v2.1/restaurant?res_id=";

function RestaurantProfile() {
  const { restauranProfile } = useContext(RestaurantContext);
  const [isLoading, setIsLoading] = useState(false);
  const uid = useParams();

  console.log("profile", restauranProfile);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        // const data = Axios.get(`${url}/${id}`);
        // console.log("data", data);
        if (restauranProfile) {
        }
      } catch (error) {
        console.log("error", error);
      }
    }
  }, []);

  const {
    id,
    name,
    average_cost_for_two,
    cuisines,
    currency,
    photo_numbers,
    price_range,
    timings,
    user_rating,
    thumb,
    featured_image,
    highlights,
  } = restauranProfile;

  const {
    address,
    city_id,
    city,
    country_id,
    latitude,
    longitude,
    locality,
    locality_verbose,
  } = restauranProfile.location;

  return (
    <div className="restaurant-profile container">
      <Card key={id} className=" restaurant-profile">
        <img src={thumb} alt={cuisines} className="p-2" />
        <div className="restaurant-profile-info px-2">
          <h5>{name}</h5>
          <p>{cuisines}</p>
          <p>{locality_verbose}</p>
          <p>Open Now 7am - 10pm(Today) </p>
          <div className="restaurant-profile-btn">
            <button className="active">Add Review</button>
            <button>Direction</button>
            <button>Bookmark</button>
            <button>Share</button>
          </div>
          <div className="restaurant-profile-warning">
            <p>
              Dikarenakan situasi COVID-19 terkini, waktu beroprasi restoran
              mungkin berbeda. Hubungi restoran sebelum berkunjung
            </p>
          </div>
          <h5>Cuisines</h5>
          <p>{cuisines}</p>
          <div className="restaurant-profile-highlights">
            <h5>About This Place</h5>
            <h5>Average Cost</h5>
            <p>
              {currency} {""}
              {average_cost_for_two} for two people (approx.)
            </p>
            <ul>
              {highlights.map((item, index) => {
                //   const data = JSON.stringify(item);
                return item ? <li key={index}>{item}</li> : null;
              })}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RestaurantProfile;
