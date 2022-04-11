import React from "react";
import { Navigate } from "react-router-dom";

const Charts = React.lazy(() => import("./components/Charts"));
const Page = React.lazy(() => import("./components/Page"));
const IndexPage = React.lazy(() => import("./components/IndexPage"));
const PageNotFound = React.lazy(() => import("./components/NotFound"));

const config = {
  scenarios: [
    {
      name: "Scenario 1",
      variants: [{ name: "Scenario 1", specs: null }]
    },
    {
      name: "Scenario 2",
      variants: [{ name: "Scenario 2", specs: null }]
    },
    {
      name: "Scenario 3",
      variants: [{ name: "Scenario 3", specs: null }]
    },
    {
      name: "Scenario 4",
      variants: [{ name: "Scenario 4", specs: null }]
    }
  ],
  defaultScenarioGroup: "Scenario 1",
  routes: [
    {
      path: "/",
      component: IndexPage
    },
    {
      path: "/about",
      component: Page,
      props: { page: "about" }
    },
    {
      path: "/results/overview/emissions-and-cost",
      component: Charts,
      props: {
        charts: [
          "SYS_Emissions_CO2_Domestic",
          "SYS_CO2Price",
          "SYS_Cost_Sector",
          "SYS_LumpInv_Sector",
          "SYS_DACS",
          "SYS_FEC_Fuel"
        ]
      }
    },
    {
      path: "/results/overview/final-energy-consumption",
      component: Charts,
      props: {
        charts: [
          "SYS_FEC_Fuel",
          "SYS_FEC_Sector",
          "SYS_FEC-BIODST_Sector",
          "SYS_FEC-BIOETH_Sector",
          "SYS_FEC-BIOGAS_Sector",
          "SYS_FEC-BIOWOOx_Sector",
          "SYS_FEC-COA_Sector",
          "SYS_FEC-ELCD_Sector",
          "SYS_FEC-GASNAT_Sector",
          "SYS_FEC-H2_Sector",
          "SYS_FEC-HETD_Sector",
          "SYS_FEC-OILGSL_Sector",
          "SYS_FEC-HFO_Sector",
          "SYS_FEC-OILKER_Sector",
          "SYS_FEC-OILDST_Sector",
          "SYS_FEC-LPG_Sector",
          "SYS_FEC-PEAT_Sector"
        ]
      }
    },
    {
      path: "/results/overview/primary-energy",
      component: Charts,
      props: {
        charts: [
          "SYS_NRG-Export",
          "SYS_NRG-Import",
          "SYS_NRG-Ind_Supply",
          "SYS_TPED"
        ]
      }
    },
    {
      path: "/results/supply",
      component: Charts,
      props: {
        charts: ["SUP_BIOETH", "SUP_BIOETH", "SUP_BIOGAS", "SUP_HYDROGEN"]
      }
    },
    {
      path: "/results/power",
      component: Charts,
      props: {
        charts: [
          "PWR_Cap",
          "PWR_Cap-N",
          "PWR_Emissions-CO2",
          "PWR_Gen-ELCC",
          "PWR_Gen-HETC"
        ]
      }
    },
    {
      path: "/results/transport/overview",
      component: Charts,
      props: { charts: ["TRA_Emissions-CO2", "TRA_FEC", "TRA-Land_LumpInv"] }
    },
    {
      path: "/results/transport/final-energy-consumption",
      component: Charts,
      props: {
        charts: [
          "TRA_Freight_Land_FuelCons",
          "TRA_Passenger_Land_FuelCons",
          "TRA_AVIDOM_FuelCons",
          "TRA_AVIINT_FuelCons",
          "TRA_NAV_FuelCons",
          "TRA_OTH_FuelCons",
          "TRA_TURS_FuelCons"
        ]
      }
    },
    {
      path: "/results/transport/vehicle-sales-and-stock",
      component: Charts,
      props: {
        charts: [
          "TRA_P-CAR-N_TYPE",
          "TRA_P-CAR_TYPE",
          "TRA_F-HTRUCK-N_TYPE",
          "TRA_F-MTRUCK-N_TYPE",
          "TRA_F-LTRUCK-N_TYPE",
          "TRA_F-HTRUCK_TYPE",
          "TRA_F-MTRUCK_TYPE",
          "TRA_F-LTRUCK_TYPE"
        ]
      }
    },
    {
      path: "/results/transport/vehicle-activity",
      component: Charts,
      props: {
        charts: [
          "TRA_Freight_Land_Mode",
          "TRA_Passenger_Land_Distance",
          "TRA_Passenger_Land_Mode",
          "TRA_Passenger_Land_Mode-L",
          "TRA_Passenger_Land_Mode-M",
          "TRA_Passenger_Land_Mode-S"
        ]
      }
    },
    {
      path: "/results/residential/overview",
      component: Charts,
      props: { charts: ["RSD_Services_CO2Emissions"] }
    },
    {
      path: "/results/residential/final-energy-consumption",
      component: Charts,
      props: {
        charts: [
          "RSD_Services_EnergyCons",
          "RSD_FEC",
          "RSD_WaterSpace_FuelCons",
          "RSD_WS-APT_FuelCons",
          "RSD_WS-ATT_FuelCons",
          "RSD_WS-DET_FuelCons",
          "RSD_OtherServices_FuelCons"
        ]
      }
    },
    {
      path: "/results/residential/retrofits",
      component: Charts,
      props: {
        charts: [
          "RSD_RTFT-APT_NCAP",
          "RSD_RTFT-ATT_NCAP",
          "RSD_RTFT-DET_NCAP",
          "RSD_RTFT_NRG_SAVINGS"
        ]
      }
    },
    {
      path: "/results/residential/new-heating",
      component: Charts,
      props: {
        charts: ["RSD_WS-APT_NCAP", "RSD_WS-ATT_NCAP", "RSD_WS-DET_NCAP"]
      }
    },
    {
      path: "/results/residential/house-stock",
      component: Charts,
      props: { charts: ["RSD_BLD_TYPE", "RSD_BLD-N_TYPE"] }
    },
    {
      path: "/results/services",
      component: Charts,
      props: {
        charts: [
          "SRV_FEC_Service",
          "SRV_FEC",
          "SRV-COM_FEC_WS",
          "SRV-PUB_FEC_WS",
          "SRV_FEC_DCs",
          "SRV-DCs_EH",
          "SRV-DCs_EH_DH-Grid"
        ]
      }
    },
    {
      path: "/results/industry",
      component: Charts,
      props: {
        charts: [
          "IND_FEC",
          "IND_Emissions-CO2",
          "IND-TAP_FEC",
          "IND-ONM_FEC",
          "IND-TEM_FEC",
          "IND-WAP_FEC",
          "IND-OMA_FEC",
          "IND-RAP_FEC",
          "IND-EOE_FEC",
          "IND-CON_FEC",
          "IND-PX4_FEC",
          "IND-CAF_FEC",
          "IND-FAB_FEC",
          "IND-MAP_FEC",
          "IND-NEM_FEC",
          "IND-MAE_FEC"
        ]
      }
    },
    {
      path: "/results/agriculture",
      component: Charts,
      props: {
        charts: ["AGR_FEC"]
      }
    },
    {
      path: "/results/overview",
      component: Navigate,
      props: { replace: true, to: "/results/overview/emissions-and-cost" }
    },
    {
      path: "/results/transport",
      component: Navigate,
      props: { replace: true, to: "/results/transport/overview" }
    },
    {
      path: "/results/residential",
      component: Navigate,
      props: { replace: true, to: "/results/residential/overview" }
    },
    {
      path: "/results/",
      component: Navigate,
      props: { replace: true, to: "/results/overview/emissions-and-cost" }
    },
    {
      path: "*",
      component: PageNotFound
    }
  ],
  routeWithSidebar: "/results/*",
  contentNavs: [
    {
      path: "/results/*",
      links: [
        { to: "/results/overview", text: "Overview" },
        { to: "/results/supply", text: "Supply" },
        { to: "/results/power", text: "Power" },
        { to: "/results/transport", text: "Transport" },
        { to: "/results/residential", text: "Residential" },
        { to: "/results/services", text: "Services" },
        { to: "/results/industry", text: "Industry" },
        { to: "/results/agriculture", text: "Agriculture" }
      ],
      variant: "tabs"
    },
    {
      path: "/results/overview/*",
      links: [
        {
          to: "/results/overview/emissions-and-cost",
          text: "Emissions and cost"
        },
        {
          to: "/results/overview/final-energy-consumption",
          text: "Final energy consumption"
        },
        { to: "/results/overview/primary-energy", text: "Primary energy" }
      ],
      variant: "underscore"
    },
    {
      path: "/results/transport/*",
      links: [
        { to: "/results/transport/overview", text: "Overview" },
        {
          to: "/results/transport/final-energy-consumption",
          text: "Final energy consumption"
        },
        {
          to: "/results/transport/vehicle-sales-and-stock",
          text: "Vehicle sales and stock by mode"
        },
        { to: "/results/transport/vehicle-activity", text: "Vehicle activity" }
      ],
      variant: "underscore"
    },
    {
      path: "/results/residential/*",
      links: [
        { to: "/results/residential/overview", text: "Overview" },
        {
          to: "/results/residential/final-energy-consumption",
          text: "Final energy consumption"
        },
        { to: "/results/residential/retrofits", text: "Retrofits" },
        { to: "/results/residential/new-heating", text: "New heating by type" },
        { to: "/results/residential/house-stock", text: "House stock" }
      ],
      variant: "underscore"
    }
  ],
  headerNavLinks: [
    { to: "/about", text: "About" },
    { to: "/results", text: "Results" }
  ]
};

export { config as default };
