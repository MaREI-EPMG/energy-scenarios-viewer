import React from "react";
import { Button } from "react-bootstrap";

function ActivateButton(props) {
  const { org, repository, setBasePath } = props;

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setBasePath(`https://${org}.github.io/${repository}`)}
      >
        Activate
      </Button>
    </>
  );
}

export default ActivateButton;
