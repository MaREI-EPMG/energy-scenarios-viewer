import React, { useState, useRef, useEffect } from "react";
import { Layout } from "./containers";
import configuration from "./config";

function App() {
  const [basePath, setBasePath] = useState("");

  const config = {
    scenarios: configuration.studies.find(
      (study) => study.basePath === basePath
    ).scenarios,
    defaultScenarioGroup: configuration.defaultScenarioGroups.find(
      (defaultScenarioGroup) => defaultScenarioGroup.basePath === basePath
    ).scenarioName,
    routes: configuration.routes,
    routeWithSidebar: configuration.routeWithSidebar,
    contentNavs: configuration.contentNavs,
    headerNavLinks: configuration.headerNavLinks
  };

  const [mainScenario, setMainScenario] = useState(config.defaultScenarioGroup);
  const [compareScenario, setCompareScenario] = useState(null);
  const [showDifference, setShowDifference] = useState(false);
  const cache = useRef({});

  useEffect(() => {
    if (!compareScenario) {
      setShowDifference(false);
    }
  }, [compareScenario]);

  useEffect(() => {
    setMainScenario(
      configuration.defaultScenarioGroups.find(
        (defaultScenarioGroup) => defaultScenarioGroup.basePath === basePath
      ).scenarioName
    );
  }, [basePath]);

  return (
    <Layout
      {...config}
      cache={cache}
      basePath={basePath}
      selectedScenarios={[mainScenario, compareScenario]}
      showDifference={showDifference}
      setBasePath={setBasePath}
      setMainScenario={setMainScenario}
      setCompareScenario={setCompareScenario}
      setShowDifference={setShowDifference}
    />
  );
}

export default App;
