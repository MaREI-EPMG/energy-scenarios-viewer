import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import useFetchData from "../hooks/useFetch";

function IndexPage(props) {
  const repositories = useFetchData(
    `https://api.github.com/orgs/MaREI-EPMG/repos`
  );

  return (
    repositories && (
      <Row
        xs={"auto"}
        className="charts py-2 justify-content-center justify-content-md-start"
      >
        {repositories.map((repository, idx) => (
          <Col className="p-2" key={idx}>
            <Card>
              <Card.Body>{repository.name}</Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  );
}

export default IndexPage;
