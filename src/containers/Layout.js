import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { Content, Footer, Header, Sidebar } from "../containers";
import { PageLoading } from "../components";

function Layout(props) {
  const {
    defaultScenarioGroup,
    scenarios,
    routeWithSidebar,
    routes,
    basePath,
    cache,
    contentNavs,
    headerNavLinks
  } = props;

  const [mainScenario, setMainScenario] = useState(defaultScenarioGroup);
  const [compareScenario, setCompareScenario] = useState(null);
  const [showDifference, setShowDifference] = useState(false);

  useEffect(() => {
    if (!compareScenario) {
      setShowDifference(false);
    }
  }, [compareScenario]);

  const scenarioList = scenarios.map((scenario) => scenario.name);
  const selectedScenarios = [mainScenario, compareScenario];

  return (
    <Container fluid="ms" className="vh-100 d-flex flex-column">
      <Row as="header" className="mb-3 mx-0">
        <Header navLinks={headerNavLinks} />
      </Row>
      <Suspense fallback={<PageLoading />}>
        <Row className="mx-0 flex-grow-1">
          {routeWithSidebar && (
            <Routes>
              <Route
                path={routeWithSidebar}
                element={
                  <Sidebar
                    scenarioList={scenarioList}
                    selectedScenarios={selectedScenarios}
                    showDifference={showDifference}
                    setMainScenario={setMainScenario}
                    setCompareScenario={setCompareScenario}
                    setShowDifference={setShowDifference}
                  />
                }
              />
            </Routes>
          )}
          <Content
            routes={routes}
            basePath={basePath}
            cache={cache}
            contentNavs={contentNavs}
            scenarioList={scenarioList}
            selectedScenarios={selectedScenarios}
            showDifference={showDifference}
            setMainScenario={setMainScenario}
            setCompareScenario={setCompareScenario}
            setShowDifference={setShowDifference}
          />
        </Row>
      </Suspense>
      <Row as="footer" className="mt-3 mx-0">
        <Footer />
      </Row>
    </Container>
  );
}

export default Layout;
