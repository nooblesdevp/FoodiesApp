import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { RestaurantContext } from "../context/context";
import Collection from "./Collection";

function Collections() {
  const { collection } = useContext(RestaurantContext);
  // console.log("collection", collection);
  return (
    <div className="collections ">
      {collection.map((res) => {
        // console.log("collection", res.collections);
        const newCollection = res.collections;
        return (
          <>
            <h5 className="collections-title">{res.display_text}</h5>
            <Collection collection={newCollection} />
          </>
        );
      })}
    </div>
  );
}

export default Collections;
