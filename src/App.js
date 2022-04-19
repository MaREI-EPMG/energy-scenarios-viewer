import React, { useRef } from "react";
import { Layout } from "./containers";
import configuration from "./config";
import useFetch from "./hooks/useFetch";

//      onClick={() => setBasePath(`https://${org}.github.io/${repository}`)}

function App() {
  const cache = useRef({});
  const topic = "tim-scenario";
  const org = "MaREI-EPMG";
  const [isRepositoriesLoading, repositories] = useFetch(
    `https://api.github.com/orgs/${org}/repos`,
    cache
  );
  const ghpages = `https://${org}.github.io/`;

  const dataRepositories = isRepositoriesLoading
    ? null
    : repositories.filter((repository) => {
        return repository.topics.includes(topic) && repository.has_pages;
      });

  const createStudyRoutes = (prefix, routes) => {
    return routes.map((route) => ({
      ...route,
      path: `/${prefix}${route.path}`,
      props: route.props
        ? {
            ...route.props,
            to: route.props.to ? `/${prefix}${route.props.to}` : ""
          }
        : ""
    }));
  };

  const createContenNavs = (prefix, contentNavs) => {
    return contentNavs.map((contentNav) => ({
      ...contentNav,
      links: contentNav.links.map((link) => ({
        ...link,
        to: `/${prefix}${link.to}`
      })),
      path: `/${prefix}${contentNav.path}`
    }));
  };

  const studyConfigs = dataRepositories
    ? dataRepositories.map((repository) => ({
        name: repository.name,
        basePath: `${ghpages}${repository.name}`,
        scenarios: configuration.studies.find(
          (study) => study.name === repository.name
        ).scenarios,
        defaultScenarioGroup: configuration.defaultScenarioGroups.find(
          (defaultScenarioGroup) =>
            defaultScenarioGroup.name === repository.name
        ).scenarioName,
        routes: createStudyRoutes(repository.name, configuration.studyRoutes),
        routeWithSidebar: `/${repository.name}${configuration.routeWithSidebar}`,
        contentNavs: createContenNavs(
          repository.name,
          configuration.contentNavs
        ),
        headerNavLinks: configuration.headerNavLinks
      }))
    : null;

  console.log(studyConfigs);

  return (
    <>
      {!isRepositoriesLoading &&
        studyConfigs.map((config, idx) => (
          <Layout {...config} cache={cache} key={idx} />
        ))}
    </>
  );
}

export default App;
