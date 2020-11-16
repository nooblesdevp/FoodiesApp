import React from "react";
import { MdSearch } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { Card } from "react-bootstrap";
import { MdExpandMore } from "react-icons/md";

function SearchForm({ location }) {
  return (
    <div className="searchForm-container">
      <Card>
        <div className="ml-3 mt-3">
          <span className="small">
            Your Location <MdExpandMore />
          </span>
          <h5> {location} </h5>
        </div>
        <div className="searchForm d-flex  align-items-center mb-4 mt-2">
          <MdSearch className="searchForm-Icon" />
          <input type="text" placeholder="search restaurant" />
          <VscSettings className="searchForm-filterIcon" />
        </div>
      </Card>
    </div>
  );
}

export default SearchForm;
