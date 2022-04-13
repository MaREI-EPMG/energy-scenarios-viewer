import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import useFetchData from "../hooks/useFetch";

function IndexPage(props) {
  const [isLoading, repositories] = useFetchData(
    `https://api.github.com/orgs/MaREI-EPMG/repos`,
    props.cache
  );

  return (
    repositories && (
      <Row xs={"auto"} className="charts py-2 justify-content-center">
        {!isLoading &&
          repositories.map(
            (repository, idx) =>
              repository.topics.includes("tim-scenario") && (
                <Col className="p-2" key={idx}>
                  <Card>
                    <Card.Header>{repository.name}</Card.Header>
                    <Card.Body>{repository.description}</Card.Body>
                    <Card.Footer>
                      <a href={repository.html_url}>{repository.html_url}</a>
                    </Card.Footer>
                  </Card>
                </Col>
              )
          )}
      </Row>
    )
  );
}

export default IndexPage;
