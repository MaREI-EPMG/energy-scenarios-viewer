import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Chart, ChartLegend } from "../components";
import chartsInfo from "../specs/chartsInfo";

function Charts(props) {
  return (
    <Row
      xs={"auto"}
      className="charts g-2 m-sm-3 justify-content-center justify-content-md-start"
    >
      {props.charts.map((chart, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Header>{chart}</Card.Header>
            <Chart
              chartName={chart}
              selectedScenarios={props.selectedScenarios}
              showDifference={props.showDifference}
              {...chartsInfo[chart]}
            />
            <Card.Footer>
              <ChartLegend {...chartsInfo[chart]} />
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Charts;
