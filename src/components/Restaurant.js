import React from "react";
import { Card } from "react-bootstrap";
import NearbyRestaurant from "./NearbyRestaurant";

function Restaurant({ rests }) {
  const data = rests.nearby_restaurants;

  return (
    <div>
      <Card>
        <Card.Title>{rests.location.city_name}</Card.Title>
      </Card>
      {data.map((res) => {
        return <NearbyRestaurant res={res} />;
      })}
    </div>
  );
}

export default Restaurant;
