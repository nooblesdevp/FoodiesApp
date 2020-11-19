import React, { createContext, useState } from "react";
import mockCollection from "./mockData/mockCollection";
import mockLocation from "./mockData/mockLocation";
import mockRestaurantProfile from "./mockData/mockRestaurantProfile";

const RestaurantContext = createContext();

function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState(mockLocation);
  const [collection, setCollection] = useState(mockCollection);
  const [isLoading, setIsLoading] = useState(true);
  const [restauranProfile, setRestaurantProfile] = useState(
    mockRestaurantProfile
  );

  return (
    <RestaurantContext.Provider
      value={{ restaurants, collection, isLoading, restauranProfile }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
