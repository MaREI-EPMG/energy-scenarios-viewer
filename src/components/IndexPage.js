import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import useFetchData from "../hooks/useFetch";
import ActivateButton from "./ActivateButton";

function IndexPage(props) {
  const topic = "tim-scenario";
  const org = "MaREI-EPMG";

  const [isRepositoriesLoading, repositories] = useFetchData(
    `https://api.github.com/orgs/${org}/repos`,
    props.cache
  );

  const dataRepositories = isRepositoriesLoading
    ? null
    : repositories.filter((repository) => {
        return repository.topics.includes(topic);
      });

  return (
    repositories && (
      <Row xs={"auto"} className="charts py-2 justify-content-center">
        {dataRepositories &&
          dataRepositories.map((repository, idx) => (
            <Col className="p-2" key={idx}>
              <Card>
                <Card.Header>{repository.name}</Card.Header>
                <Card.Body>{repository.description}</Card.Body>
                <Card.Footer>
                  <ActivateButton
                    setBasePath={props.setBasePath}
                    cache={props.cache}
                    org={org}
                    repository={repository.name}
                  />
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    )
  );
}

export default IndexPage;
