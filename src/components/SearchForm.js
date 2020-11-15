import React from "react";
import { MdSearch } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { Card } from "react-bootstrap";
import { MdExpandMore } from "react-icons/md";
import NearbyRestaurant from "./NearbyRestaurant";

function SearchForm({ rests }) {
  const data = rests.nearby_restaurants;

  return (
    <div className="searchForm-container">
      <Card>
        <div className="ml-3">
          <span className="small">
            Your Location <MdExpandMore />
          </span>
          <h5>{rests.location.city_name}</h5>
        </div>
        <div className="searchForm d-flex  align-items-center mb-4">
          <MdSearch className="searchForm-Icon" />
          <input type="text" placeholder="search restaurant" />
          <VscSettings className="searchForm-filterIcon" />
        </div>
      </Card>

      {data.map((res) => {
        return <NearbyRestaurant res={res} />;
      })}
    </div>
  );
}

export default SearchForm;
