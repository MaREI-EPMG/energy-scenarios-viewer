import React from "react";
import { Button } from "react-bootstrap";

function ExploreButton(props) {
  return (
    <Button variant="secondary" href={props.url}>
      Explore
    </Button>
  );
}

export default ExploreButton;
