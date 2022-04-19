import React from "react";
import { Link } from "react-router-dom";

function ExploreButton(props) {
  return (
    <>
      <Link
        className="btn btn-secondary"
        to={{
          pathname: props.url
        }}
      >
        Explore
      </Link>
    </>
  );
}

export default ExploreButton;
