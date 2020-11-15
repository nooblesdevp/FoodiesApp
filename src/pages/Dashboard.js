import { useContext, useState } from "react";
import Restaurant from "../components/Restaurant";
import SearchForm from "../components/SearchForm";
import { RestaurantContext } from "../context/context";

function Dashboard() {
  const { restaurants } = useContext(RestaurantContext);
  console.log("data", restaurants);
  return (
    <div className="container">
      {restaurants.map((rests) => {
        return <SearchForm key={rests.location.city_id} rests={rests} />;
      })}
    </div>
  );
}
export default Dashboard;
