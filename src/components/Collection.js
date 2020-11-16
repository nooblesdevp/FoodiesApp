import React from "react";
import { Card } from "react-bootstrap";

function Collection({ collection }) {
  //   console.log("collection", collection);
  return (
    <div className="collection">
      {collection.map((res) => {
        // console.log("res", res);
        const id = res.collection.collection_id;
        const img = res.collection.image_url;
        const title = res.collection.title;

        return (
          <div className="collection-card" key={id}>
            <img src={img} alt="" srcset="" />
            <div className="collection-card-info">
              <h5>{title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Collection;
