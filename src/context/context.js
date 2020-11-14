import React, { createContext, useState } from "react";

import mockLocation from "./mockData/mockLocation";

const RestaurantContext = createContext();
function RestaurantProvider({ children }) {
  const [restaurants, setRestaurants] = useState(mockLocation);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading }}>
      {children}
    </RestaurantContext.Provider>
  );
}

export { RestaurantContext, RestaurantProvider };
