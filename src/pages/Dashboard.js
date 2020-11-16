import { useContext, useState } from "react";
import Collections from "../components/Collections";
import NearbyRestaurant from "../components/NearbyRestaurant";
import Restaurant from "../components/Restaurant";
import SearchForm from "../components/SearchForm";
import { RestaurantContext } from "../context/context";

function Dashboard() {
  const { restaurants } = useContext(RestaurantContext);

  return (
    <div className="container">
      {restaurants.map((rests) => {
        // console.log("rests", rests);
        const data = rests.nearby_restaurants;
        // console.log("data", data);
        return (
          <>
            {" "}
            <SearchForm location={rests.location.city_name} />
            <Collections />
            <NearbyRestaurant key={rests.location.city_id} collection={data} />
          </>
        );
      })}
    </div>
  );
}
export default Dashboard;
