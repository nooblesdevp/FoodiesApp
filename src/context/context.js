import React, { createContext, useState } from "react";
import mockCollection from "./mockData/mockCollection";
import mockLocation from "./mockData/mockLocation";

const RestaurantContext = createContext();
function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState(mockLocation);
  const [collection, setCollection] = useState(mockCollection);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <RestaurantContext.Provider value={{ restaurants, collection, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
