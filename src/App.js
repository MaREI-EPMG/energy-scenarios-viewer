import React, { useRef } from "react";
import { Layout } from "./containers";
import { Route, Routes } from "react-router-dom";
import configuration from "./config";
import useFetch from "./hooks/useFetch";

const IndexPage = React.lazy(() => import("./components/IndexPage"));
const Page = React.lazy(() => import("./components/Page"));

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

  const otherRoutes = [
    {
      path: "/",
      component: IndexPage,
      props: { repositories: dataRepositories }
    },
    {
      path: "/about",
      component: Page,
      props: { page: "about" }
    }
  ];

  const createStudyRoutes = (prefix, routes) => {
    return routes.map((route) => ({
      ...route,
      path: route.path,
      props: route.props
        ? {
            ...route.props,
            to: route.props.to ? `/${prefix}${route.props.to}` : ""
          }
        : ""
    }));
  };

  const createLinks = (prefix, links) => {
    return links.map((link) => ({
      ...link,
      to: `/${prefix}${link.to}`
    }));
  };

  const createContenNavs = (prefix, contentNavs) => {
    return contentNavs.map((contentNav) => ({
      ...contentNav,
      links: createLinks(prefix, contentNav.links),
      path: contentNav.path
    }));
  };

  const indexConfig = {
    basePath: "",
    scenarios: [],
    defaultScenarioGroup: "",
    routes: otherRoutes,
    routeWithSidebar: "",
    contentNavs: [],
    headerNavLinks: configuration.headerNavLinks,
    repositories: isRepositoriesLoading ? null : dataRepositories
  };

  const studyConfigs = dataRepositories
    ? [
        indexConfig,
        ...dataRepositories.map((repository) => ({
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
          routeWithSidebar: configuration.routeWithSidebar,
          contentNavs: createContenNavs(
            repository.name,
            configuration.contentNavs
          ),
          headerNavLinks: createLinks(
            repository.name,
            configuration.headerNavLinks
          )
        }))
      ]
    : [indexConfig];

  console.log(studyConfigs);

  return (
    <Routes>
      {!isRepositoriesLoading &&
        studyConfigs.map((config, idx) => (
          <Route
            key={idx}
            path={config.name ? `${config.name}/*` : "/*"}
            element={<Layout {...config} cache={cache} />}
          />
        ))}
    </Routes>
  );
}

export default App;
