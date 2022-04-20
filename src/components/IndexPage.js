import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import ExploreButton from "./ExploreButton";

function IndexPage(props) {
  const { repositories } = props;

  return (
    <>
      {repositories && (
        <Row xs={"auto"} className="charts py-2 justify-content-center">
          {repositories.map((repository, idx) => (
            <Col className="p-2" key={idx}>
              <Card>
                <Card.Header>{repository.name}</Card.Header>
                <Card.Body>{repository.description}</Card.Body>
                <Card.Footer>
                  <ExploreButton url={`/${repository.name}/results`} />
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}

export default IndexPage;
