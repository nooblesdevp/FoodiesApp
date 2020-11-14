import { useContext, useState } from "react";
import "./App.scss";
import { RestaurantContext } from "./context/context";
import Restaurant from "./components/Restaurant";

import "./App.scss";

function App() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="app">
      <div className="container">
        {restaurants.map((rests) => {
          return <Restaurant key={rests.location.city_id} rests={rests} />;
        })}
      </div>
    </div>
  );
}

export default App;
