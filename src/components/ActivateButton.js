import React from "react";
import { Button } from "react-bootstrap";
import useFetchData from "../hooks/useFetch";

function ActivateButton(props) {
  const { org, repository, cache, setBasePath } = props;

  const [isBranchLoading, branch] = useFetchData(
    `https://api.github.com/repos/${org}/${repository}/branches/main`,
    cache
  );

  return (
    <>
      {!isBranchLoading && (
        <Button
          variant="secondary"
          onClick={() =>
            setBasePath(
              `https://raw.githubusercontent.com/${org}/${repository}/${branch.commit.sha}`
            )
          }
        >
          Activate
        </Button>
      )}
    </>
  );
}

export default ActivateButton;
