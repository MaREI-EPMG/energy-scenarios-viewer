const xGridMarks = [2020, 2025, 2030, 2035, 2040, 2045, 2050];
const xPeriods = [...Array(31)].map((_, i) => 2020 + i);

const chartsInfo = {
  "AGR_FEC": {
    "seriesNames": [
      "AGRBDL",
      "AGRBIO",
      "AGRDST",
      "AGRELC",
      "AGRGAS",
      "AGRGEO",
      "AGRLPG",
      "AGRSOL"
    ],
    colorScale: [
      "#00429d",
      "#4771b2",
      "#73a2c6",
      "#a5d5d8",
      "#ffbcaf",
      "#f4777f",
      "#cf3759",
      "#93003a"
    ],
    "unit": "PJ",
    "maxY": 11,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_Emissions_CO2_Domestic": {
    "seriesNames": [
      "AGRCO2N",
      "INDCO2N",
      "INDCO2P",
      "PWRCO2N",
      "RSDCO2",
      "SRVCO2N",
      "TRACO2N"
    ],
    "colorScale": [
      "#A7398C",
      "#86AC0F",
      "#6C104C",
      "#ECDEB1",
      "#39A838",
      "#E4592B",
      "#D99C2B"
    ],
    "unit": "kt",
    "maxY": 49540,
    "minY": -5459,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_DACS": {
    "seriesNames": ["AGRCO2N", "INDCO2P", "INDCO2N", "RSDCO2"],
    "colorScale": ["#A7398C", "#6C104C", "#86AC0F", "#39A838"],
    "unit": "kt",
    "maxY": 1085,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "IND_Emissions-CO2": {
    "seriesNames": [
      "DMD_IND-CAF",
      "DMD_IND-CON",
      "DMD_IND-EOE",
      "DMD_IND-FAB",
      "DMD_IND-MAE",
      "DMD_IND-MAP",
      "DMD_IND-NEM",
      "DMD_IND-OMA",
      "DMD_IND-ONM",
      "DMD_IND-PX4",
      "DMD_IND-RAP",
      "DMD_IND-TAP",
      "DMD_IND-TEM",
      "DMD_IND-WAP"
    ],
    "colorScale": [
      "#CEB841",
      "#6CC686",
      "#54340E",
      "#5DD221",
      "#A2473B",
      "#36469D",
      "#947122",
      "#701339",
      "#C88A28",
      "#8816E5",
      "#777878",
      "#C68EDB",
      "#62F9E5",
      "#04B026"
    ],
    "unit": "kt",
    "maxY": 10231,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 210,
    "itemsPerRow": 2
  },
  "RSD_BLD_TYPE": {
    "seriesNames": ["DMD_RSD-BLD-APT", "DMD_RSD-BLD-ATT", "DMD_RSD-BLD-DET"],
    "colorScale": ["#2A6451", "#3BCE99", "#108840"],
    "unit": "kUnits",
    "maxY": 2911,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_BLD-N_TYPE": {
    "seriesNames": ["DMD_RSD-BLD-APT", "DMD_RSD-BLD-ATT", "DMD_RSD-BLD-DET"],
    "colorScale": ["#2A6451", "#3BCE99", "#108840"],
    "unit": "kDwellings",
    "maxY": 170,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SRV_FEC_Service": {
    "seriesNames": [
      "DMD_SRV-CS_DC",
      "DMD_SRV-PU_PLIG",
      "SRV-CS_NRGSRV-CK",
      "SRV-CS_NRGSRV-LIG",
      "SRV-CS_NRGSRV-OEL",
      "SRV-CS_NRGSRV-REF",
      "SRV-CS_NRGSRV-WS",
      "SRV-PU_NRGSRV-CK",
      "SRV-PU_NRGSRV-LIG",
      "SRV-PU_NRGSRV-OEL",
      "SRV-PU_NRGSRV-REF",
      "SRV-PU_NRGSRV-WS"
    ],
    "colorScale": [
      "#7EC10C",
      "#AA0E8C",
      "#147824",
      "#E6BF99",
      "#F7DC36",
      "#D2D2BC",
      "#1F155C",
      "#D53B1B",
      "#1B722F",
      "#BD9721",
      "#43BB96",
      "#5008CC"
    ],
    "unit": "PJ",
    "maxY": 178,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "TRA_Freight_Land_Mode": {
    "seriesNames": [
      "DMD_TRA-F-HTRUCK",
      "DMD_TRA-F-LTRUCK",
      "DMD_TRA-F-MTRUCK",
      "DMD_TRA-F-TRAIN"
    ],
    "colorScale": ["#628307", "#D1E23C", "#43B4D2", "#40E92E"],
    "unit": "Btkm",
    "maxY": 40,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_F-HTRUCK-N_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-HTRUCK-BEV",
      "DMD_TRA-F-HTRUCK-FCV",
      "DMD_TRA-F-HTRUCK-HEV",
      "DMD_TRA-F-HTRUCK-ICE"
    ],
    "colorScale": ["#75181D", "#28058D", "#8180EB", "#D33780"],
    "unit": "kVehicles",
    "maxY": 40,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_F-HTRUCK_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-HTRUCK-BEV",
      "DMD_TRA-F-HTRUCK-FCV",
      "DMD_TRA-F-HTRUCK-HEV",
      "DMD_TRA-F-HTRUCK-ICE"
    ],
    "colorScale": ["#75181D", "#28058D", "#8180EB", "#D33780"],
    "unit": "kVehicles",
    "maxY": 73,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA-Land_LumpInv": {
    "seriesNames": ["DMD_TRA-F-LAND", "DMD_TRA-P-LAND"],
    "colorScale": ["#0C5871", "#F464BA"],
    "unit": "MEUR",
    "maxY": 37469,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_Emissions-CO2": {
    "seriesNames": [
      "DMD_TRA-F-LAND",
      "DMD_TRA-P-LAND",
      "DMD_TRA-R-AVIDOM",
      "DMD_TRA-R-AVIINT",
      "DMD_TRA-R-NAV",
      "DMD_TRA-R-OTH",
      "DMD_TRA-R-TURS"
    ],
    "colorScale": [
      "#0C5871",
      "#F464BA",
      "#A1ECAD",
      "#41AED5",
      "#AB6461",
      "#C005E2",
      "#277199"
    ],
    "unit": "kt",
    "maxY": 16264,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_F-LTRUCK-N_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-LTRUCK-BEV",
      "DMD_TRA-F-LTRUCK-ICE",
      "DMD_TRA-F-LTRUCK-HEV",
      "DMD_TRA-F-LTRUCK-PHEV"
    ],
    "colorScale": ["#D83056", "#63F497", "#56A1BC", "#C3CEBE"],
    "unit": "kVehicles",
    "maxY": 374,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_F-LTRUCK_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-LTRUCK-BEV",
      "DMD_TRA-F-LTRUCK-ICE",
      "DMD_TRA-F-LTRUCK-HEV",
      "DMD_TRA-F-LTRUCK-PHEV"
    ],
    "colorScale": ["#D83056", "#63F497", "#56A1BC", "#C3CEBE"],
    "unit": "kVehicles",
    "maxY": 797,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_F-MTRUCK-N_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-MTRUCK-BEV",
      "DMD_TRA-F-MTRUCK-FCV",
      "DMD_TRA-F-MTRUCK-HEV",
      "DMD_TRA-F-MTRUCK-ICE"
    ],
    "colorScale": ["#A6DF18", "#0CD9F9", "#573396", "#A38604"],
    "unit": "kVehicles",
    "maxY": 20,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_F-MTRUCK_TYPE": {
    "seriesNames": [
      "DMD_TRA-F-MTRUCK-BEV",
      "DMD_TRA-F-MTRUCK-FCV",
      "DMD_TRA-F-MTRUCK-HEV",
      "DMD_TRA-F-MTRUCK-ICE"
    ],
    "colorScale": ["#A6DF18", "#0CD9F9", "#573396", "#A38604"],
    "unit": "kVehicles",
    "maxY": 37,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_Passenger_Land_Mode": {
    "seriesNames": [
      "DMD_TRA-P-ACTIVE",
      "DMD_TRA-P-BUS",
      "DMD_TRA-P-CAR",
      "DMD_TRA-P-HPT",
      "DMD_TRA-P-LPT",
      "DMD_TRA-P-MOT",
      "DMD_TRA-P-TAXI"
    ],
    "colorScale": [
      "#BF4776",
      "#B4D24C",
      "#5F363A",
      "#E23BB8",
      "#7E38F2",
      "#3420FE",
      "#85CBAC"
    ],
    "unit": "Bpkm",
    "maxY": 115,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_Passenger_Land_Mode-M": {
    "seriesNames": [
      "DMD_TRA-P-ACTIVE",
      "DMD_TRA-P-BUS",
      "DMD_TRA-P-CAR",
      "DMD_TRA-P-HPT",
      "DMD_TRA-P-LPT",
      "DMD_TRA-P-MOT",
      "DMD_TRA-P-TAXI"
    ],
    "colorScale": [
      "#BF4776",
      "#B4D24C",
      "#5F363A",
      "#E23BB8",
      "#7E38F2",
      "#3420FE",
      "#85CBAC"
    ],
    "unit": "Bpkm",
    "maxY": 49,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_Passenger_Land_Mode-S": {
    "seriesNames": [
      "DMD_TRA-P-ACTIVE",
      "DMD_TRA-P-BUS",
      "DMD_TRA-P-CAR",
      "DMD_TRA-P-LPT",
      "DMD_TRA-P-MOT",
      "DMD_TRA-P-TAXI"
    ],
    "colorScale": [
      "#BF4776",
      "#B4D24C",
      "#5F363A",
      "#7E38F2",
      "#3420FE",
      "#85CBAC"
    ],
    "unit": "Bpkm",
    "maxY": 23,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_Passenger_Land_Mode-L": {
    "seriesNames": [
      "DMD_TRA-P-BUS",
      "DMD_TRA-P-CAR",
      "DMD_TRA-P-HPT",
      "DMD_TRA-P-TAXI"
    ],
    "colorScale": ["#B4D24C", "#5F363A", "#E23BB8", "#85CBAC"],
    "unit": "Bpkm",
    "maxY": 43,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_P-CAR_TYPE": {
    "seriesNames": [
      "DMD_TRA-P-CAR-BEV",
      "DMD_TRA-P-CAR-HEV",
      "DMD_TRA-P-CAR-ICE",
      "DMD_TRA-P-CAR-PHEV"
    ],
    "colorScale": ["#D26ECD", "#69597A", "#EF8F51", "#63955B"],
    "unit": "kVehicles",
    "maxY": 3577,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_P-CAR-N_TYPE": {
    "seriesNames": [
      "DMD_TRA-P-CAR-BEV",
      "DMD_TRA-P-CAR-HEV",
      "DMD_TRA-P-CAR-ICE",
      "DMD_TRA-P-CAR-PHEV"
    ],
    "colorScale": ["#D26ECD", "#69597A", "#EF8F51", "#63955B"],
    "unit": "kVehicles",
    "maxY": 1173,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_CO2Price": {
    "seriesNames": ["ENV-CO2"],
    "colorScale": ["#F46A9D"],
    "unit": "MEUR/kt",
    "maxY": 2,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_Cost_Type": {
    "seriesNames": ["FIX", "INV", "VAR"],
    "colorScale": ["#F7448D", "#14B1ED", "#63CA85"],
    "unit": "MEUR",
    "maxY": 34749,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-ELCD_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_RSD", "FT_SRV", "FT_TRA"],
    "colorScale": ["#4A5A17", "#FD69C9", "#C07285", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 339,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_FEC-OILDST_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_SRV", "FT_TRA"],
    "colorScale": ["#4A5A17", "#FD69C9", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 170,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_RSD", "FT_SRV", "FT_TRA"],
    "colorScale": ["#4A5A17", "#FD69C9", "#C07285", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 721,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_FEC-LPG_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_RSD", "FT_SRV"],
    "colorScale": ["#4A5A17", "#FD69C9", "#C07285", "#6EED5E"],
    "unit": "PJ",
    "maxY": 112,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-BIODST_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_RSD", "FT_TRA"],
    "colorScale": ["#4A5A17", "#FD69C9", "#C07285", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 35,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-GASNAT_Sector": {
    "seriesNames": ["FT_AGR", "FT_IND", "FT_RSD", "FT_SRV", "FT_TRA"],
    "colorScale": ["#4A5A17", "#FD69C9", "#C07285", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 290,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_FEC-BIOGAS_Sector": {
    "seriesNames": ["FT_IND", "FT_SRV", "FT_TRA"],
    "colorScale": ["#FD69C9", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 58,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-BIOWOOx_Sector": {
    "seriesNames": ["FT_IND", "FT_RSD", "FT_SRV"],
    "colorScale": ["#FD69C9", "#C07285", "#6EED5E"],
    "unit": "PJ",
    "maxY": 43,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-COA_Sector": {
    "seriesNames": ["FT_IND", "FT_RSD", "FT_SRV"],
    "colorScale": ["#FD69C9", "#C07285", "#6EED5E"],
    "unit": "PJ",
    "maxY": 24,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-HFO_Sector": {
    "seriesNames": ["FT_IND", "FT_SRV"],
    "colorScale": ["#FD69C9", "#6EED5E"],
    "unit": "PJ",
    "maxY": 15,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-OILKER_Sector": {
    "seriesNames": ["FT_IND", "FT_RSD", "FT_SRV", "FT_TRA"],
    "colorScale": ["#FD69C9", "#C07285", "#6EED5E", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 96,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-PEAT_Sector": {
    "seriesNames": ["FT_IND", "FT_RSD"],
    "colorScale": ["#FD69C9", "#C07285"],
    "unit": "PJ",
    "maxY": 8,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-H2_Sector": {
    "seriesNames": ["FT_IND", "FT_TRA"],
    "colorScale": ["#FD69C9", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 59,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-BIOETH_Sector": {
    "seriesNames": ["FT_RSD", "FT_TRA"],
    "colorScale": ["#C07285", "#DA7FBD"],
    "unit": "PJ",
    "maxY": 8,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-HETD_Sector": {
    "seriesNames": ["FT_RSD", "FT_SRV"],
    "colorScale": ["#C07285", "#6EED5E"],
    "unit": "PJ",
    "maxY": 4,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_FEC-OILGSL_Sector": {
    "seriesNames": ["FT_TRA"],
    "colorScale": ["#DA7FBD"],
    "unit": "PJ",
    "maxY": 35,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SRV-DCs_EH_DH-Grid": {
    "seriesNames": ["HETC"],
    "colorScale": ["#9C427F"],
    "unit": "PJ",
    "maxY": 6,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SUP_BIODST": {
    "seriesNames": [
      "IMPBIODST1G_S1",
      "SBIORDST01",
      "SBIORDST02",
      "SBIORDST03",
      "SBIORDST04",
      "SBIORDST05",
      "IMPBIODST1G_S2"
    ],
    "colorScale": [
      "#7C5F04",
      "#392A26",
      "#75EE15",
      "#B5CEAF",
      "#A069BD",
      "#A044F1",
      "#06D6AA"
    ],
    "unit": "PJ",
    "maxY": 35,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SUP_BIOETH": {
    "seriesNames": [
      "IMPBIOETH1G_S1",
      "SBIORETH01",
      "SBIORETH02",
      "SBIORETH03",
      "IMPBIOETH1G_S2"
    ],
    "colorScale": ["#2BB2C1", "#BEDA89", "#78B976", "#42497B", "#D92AD0"],
    "unit": "PJ",
    "maxY": 8,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-CAF_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDCOK",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDHFO",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#CB2DB3",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#6EE299",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 16,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "IND-CON_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 8,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-EOE_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 27,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-FAB_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBIO",
      "INDBKE",
      "INDCOA",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDHFO",
      "INDKER",
      "INDLPG",
      "INDPEA"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#451432",
      "#49EE2C",
      "#FDE9B3",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#6EE299",
      "#ACB842",
      "#44E806",
      "#CECD7A"
    ],
    "unit": "PJ",
    "maxY": 38,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "IND-MAE_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 2,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-MAP_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDCOA",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDHFO",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#FDE9B3",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#6EE299",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 26,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "IND-NEM_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 2,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-OMA_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDHFO",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#6EE299",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 6,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "IND-ONM_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBIO",
      "INDBKE",
      "INDCOA",
      "INDCOK",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDH2G",
      "INDKER",
      "INDLPG",
      "INDNWS",
      "INDRWS"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#451432",
      "#49EE2C",
      "#FDE9B3",
      "#CB2DB3",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#A92406",
      "#ACB842",
      "#44E806",
      "#17AE2A",
      "#E5236B"
    ],
    "unit": "PJ",
    "maxY": 28,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "IND-PX4_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 3,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-RAP_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 1,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-TAP_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 8,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-TEM_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 0,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "IND-WAP_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBIO",
      "INDBKE",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDKER",
      "INDLPG"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#451432",
      "#49EE2C",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#ACB842",
      "#44E806"
    ],
    "unit": "PJ",
    "maxY": 10,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "IND_FEC": {
    "seriesNames": [
      "INDBDL",
      "INDBGS",
      "INDBIO",
      "INDBKE",
      "INDCOA",
      "INDCOK",
      "INDDST",
      "INDELC",
      "INDGAS",
      "INDH2G",
      "INDHFO",
      "INDKER",
      "INDLPG",
      "INDNWS",
      "INDPEA",
      "INDRWS"
    ],
    "colorScale": [
      "#1692D0",
      "#B92FD7",
      "#451432",
      "#49EE2C",
      "#FDE9B3",
      "#CB2DB3",
      "#849272",
      "#8E54D5",
      "#14100E",
      "#A92406",
      "#6EE299",
      "#ACB842",
      "#44E806",
      "#17AE2A",
      "#CECD7A",
      "#E5236B"
    ],
    "unit": "PJ",
    "maxY": 171,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "SYS_Cost_Sector": {
    "seriesNames": [
      "PRC_AGR",
      "PRC_IND",
      "PRC_PWR",
      "PRC_RSD",
      "PRC_SRV",
      "PRC_SUP",
      "PRC_TRA"
    ],
    "colorScale": [
      "#773594",
      "#90D87B",
      "#4C4AA0",
      "#D3C171",
      "#F07314",
      "#3332D3",
      "#A184B6"
    ],
    "unit": "MEUR",
    "maxY": 34749,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_LumpInv_Sector": {
    "seriesNames": [
      "PRC_IND",
      "PRC_PWR",
      "PRC_RSD",
      "PRC_SRV",
      "PRC_SUP",
      "PRC_TRA",
      "PRC_AGR"
    ],
    "colorScale": [
      "#90D87B",
      "#4C4AA0",
      "#D3C171",
      "#F07314",
      "#3332D3",
      "#A184B6",
      "#773594"
    ],
    "unit": "MEUR",
    "maxY": 76702,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "PWR_Cap-N": {
    "seriesNames": [
      "PWR-BIO-CCS",
      "PWR-GAS",
      "PWR-GAS-CCS",
      "PWR-HYD",
      "PWR-SOL",
      "PWR-WIN-OF",
      "PWR-WIN-ON",
      "PWR-OCE",
      "PWR-H2",
      "PWR-MSW",
      "PWR-BIO",
      "PWR-COA"
    ],
    "colorScale": [
      "#20DDE0",
      "#C2F5B8",
      "#E00447",
      "#397186",
      "#93DA4B",
      "#9CDBD5",
      "#A6EBAD",
      "#449D47",
      "#8696E1",
      "#FCBF65",
      "#15779F",
      "#9B4566"
    ],
    "unit": "GW",
    "maxY": 11,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "PWR_Cap": {
    "seriesNames": [
      "PWR-BIO-CCS",
      "PWR-COA",
      "PWR-GAS",
      "PWR-GAS-CCS",
      "PWR-HYD",
      "PWR-OIL",
      "PWR-PEA",
      "PWR-SOL",
      "PWR-WIN-OF",
      "PWR-WIN-ON",
      "PWR-OCE",
      "PWR-H2",
      "PWR-MSW",
      "PWR-BIO"
    ],
    "colorScale": [
      "#20DDE0",
      "#9B4566",
      "#C2F5B8",
      "#E00447",
      "#397186",
      "#06E9AF",
      "#8BC852",
      "#93DA4B",
      "#9CDBD5",
      "#A6EBAD",
      "#449D47",
      "#8696E1",
      "#FCBF65",
      "#15779F"
    ],
    "unit": "GW",
    "maxY": 51,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "PWR_Emissions-CO2": {
    "seriesNames": [
      "PWR-BIO-CCS",
      "PWR-COA",
      "PWR-GAS",
      "PWR-GAS-CCS",
      "PWR-OIL",
      "PWR-PEA",
      "PWR-MSW"
    ],
    "colorScale": [
      "#20DDE0",
      "#9B4566",
      "#C2F5B8",
      "#E00447",
      "#06E9AF",
      "#8BC852",
      "#FCBF65"
    ],
    "unit": "kt",
    "maxY": 20097,
    "minY": -5543,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "PWR_Gen-ELCC": {
    "seriesNames": [
      "PWR-BIO-CCS",
      "PWR-COA",
      "PWR-GAS",
      "PWR-GAS-CCS",
      "PWR-HYD",
      "PWR-SOL",
      "PWR-WIN-OF",
      "PWR-WIN-ON",
      "PWR-OCE",
      "PWR-OIL",
      "PWR-PEA",
      "PWR-H2",
      "PWR-MSW",
      "PWR-BIO"
    ],
    "colorScale": [
      "#20DDE0",
      "#9B4566",
      "#C2F5B8",
      "#E00447",
      "#397186",
      "#93DA4B",
      "#9CDBD5",
      "#A6EBAD",
      "#449D47",
      "#06E9AF",
      "#8BC852",
      "#8696E1",
      "#FCBF65",
      "#15779F"
    ],
    "unit": "PJ",
    "maxY": 424,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "PWR_Gen-HETC": {
    "seriesNames": ["PWR-GAS"],
    "colorScale": ["#C2F5B8"],
    "unit": "PJ",
    "maxY": 0,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_WS-DET_NCAP": {
    "seriesNames": [
      "R-HC_Det_ELC_HPN2",
      "R-SC_Det_ELC_N1",
      "R-SH_Det_ELC_N1",
      "R-SW_Det_ELC_HPN1",
      "R-SW_Det_GAS_N1",
      "R-WH_Det_ELC_N1",
      "R-SW_Det_GAS_HHPN1",
      "R-SW_Det_HET_N2",
      "R-SW_Det_HVO_N1",
      "R-SH_Det_FPL_N1",
      "R-SW_Det_LPG_N1",
      "R-SW_Det_HET_N1"
    ],
    "colorScale": [
      "#3899E8",
      "#E2DD5C",
      "#818962",
      "#EC3EC0",
      "#98EA40",
      "#A841A9",
      "#4B0F91",
      "#470D26",
      "#ADEB8D",
      "#08DBB8",
      "#1C8632",
      "#FFC0BE"
    ],
    "unit": "kUnits",
    "maxY": 379,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "RSD_RTFT-APT_NCAP": {
    "seriesNames": ["R-RTFT-Apt_Shallow", "R-RTFT-Apt_Deep"],
    "colorScale": ["#466774", "#D4C2FB"],
    "unit": "kUnits",
    "maxY": 100,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_RTFT-ATT_NCAP": {
    "seriesNames": ["R-RTFT-Att_Shallow", "R-RTFT-Att_Deep"],
    "colorScale": ["#466774", "#D4C2FB"],
    "unit": "kUnits",
    "maxY": 138,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_RTFT-DET_NCAP": {
    "seriesNames": ["R-RTFT-Det_Deep", "R-RTFT-Det_Shallow"],
    "colorScale": ["#486B0D", "#C54C77"],
    "unit": "kUnits",
    "maxY": 220,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_WS-APT_NCAP": {
    "seriesNames": [
      "R-SC_Apt_ELC_N1",
      "R-SW_Apt_ELC_HPN1",
      "R-SW_Apt_HET_N1",
      "R-SW_Apt_HET_N2",
      "R-SW_Apt_GAS_N1"
    ],
    "colorScale": ["#5052B4", "#946669", "#FCD0CD", "#123163", "#34ED71"],
    "unit": "kUnits",
    "maxY": 283,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "RSD_WS-ATT_NCAP": {
    "seriesNames": [
      "R-SC_Att_ELC_N1",
      "R-SH_Att_ELC_N1",
      "R-SW_Att_ELC_HPN1",
      "R-SW_Att_GAS_HHPN1",
      "R-SW_Att_GAS_N1",
      "R-SW_Att_HET_N1",
      "R-SW_Att_HET_N2",
      "R-SW_Att_HVO_N1",
      "R-WH_Att_ELC_N1",
      "R-HC_Att_ELC_HPN2",
      "R-SW_Att_LPG_N1",
      "R-SH_Att_FPL_N1"
    ],
    "colorScale": [
      "#F7E125",
      "#592D60",
      "#3197A1",
      "#EDE4A7",
      "#CB5837",
      "#98BBC5",
      "#0361B8",
      "#693529",
      "#7383C7",
      "#8E2595",
      "#73A42A",
      "#C818F0"
    ],
    "unit": "kUnits",
    "maxY": 497,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "RSD_FEC": {
    "seriesNames": [
      "RSDAHT",
      "RSDAHT2",
      "RSDBDL",
      "RSDCOA",
      "RSDELC",
      "RSDETH",
      "RSDGAS",
      "RSDHET",
      "RSDKER",
      "RSDLPG",
      "RSDPEA",
      "RSDSOL",
      "RSDWOO"
    ],
    "colorScale": [
      "#6CF4EF",
      "#B74285",
      "#7D790A",
      "#537FF6",
      "#817323",
      "#BA3772",
      "#3A8E78",
      "#DC496E",
      "#B5E679",
      "#09ECB5",
      "#1E083C",
      "#F99928",
      "#B2979C"
    ],
    "unit": "PJ",
    "maxY": 154,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "RSD_WS-APT_FuelCons": {
    "seriesNames": [
      "RSDAHT",
      "RSDAHT2",
      "RSDCOA",
      "RSDELC",
      "RSDGAS",
      "RSDHET",
      "RSDPEA",
      "RSDSOL",
      "RSDWOO",
      "RSDETH",
      "RSDBDL",
      "RSDKER",
      "RSDLPG"
    ],
    "colorScale": [
      "#6CF4EF",
      "#B74285",
      "#537FF6",
      "#817323",
      "#3A8E78",
      "#DC496E",
      "#1E083C",
      "#F99928",
      "#B2979C",
      "#BA3772",
      "#7D790A",
      "#B5E679",
      "#09ECB5"
    ],
    "unit": "PJ",
    "maxY": 14,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "RSD_WS-ATT_FuelCons": {
    "seriesNames": [
      "RSDAHT",
      "RSDAHT2",
      "RSDBDL",
      "RSDCOA",
      "RSDELC",
      "RSDETH",
      "RSDGAS",
      "RSDHET",
      "RSDKER",
      "RSDLPG",
      "RSDPEA",
      "RSDSOL",
      "RSDWOO"
    ],
    "colorScale": [
      "#6CF4EF",
      "#B74285",
      "#7D790A",
      "#537FF6",
      "#817323",
      "#BA3772",
      "#3A8E78",
      "#DC496E",
      "#B5E679",
      "#09ECB5",
      "#1E083C",
      "#F99928",
      "#B2979C"
    ],
    "unit": "PJ",
    "maxY": 47,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "RSD_WS-DET_FuelCons": {
    "seriesNames": [
      "RSDAHT",
      "RSDAHT2",
      "RSDBDL",
      "RSDCOA",
      "RSDELC",
      "RSDETH",
      "RSDGAS",
      "RSDHET",
      "RSDKER",
      "RSDLPG",
      "RSDPEA",
      "RSDSOL",
      "RSDWOO"
    ],
    "colorScale": [
      "#6CF4EF",
      "#B74285",
      "#7D790A",
      "#537FF6",
      "#817323",
      "#BA3772",
      "#3A8E78",
      "#DC496E",
      "#B5E679",
      "#09ECB5",
      "#1E083C",
      "#F99928",
      "#B2979C"
    ],
    "unit": "PJ",
    "maxY": 71,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "RSD_WaterSpace_FuelCons": {
    "seriesNames": [
      "RSDAHT",
      "RSDAHT2",
      "RSDBDL",
      "RSDCOA",
      "RSDELC",
      "RSDETH",
      "RSDGAS",
      "RSDHET",
      "RSDKER",
      "RSDLPG",
      "RSDPEA",
      "RSDSOL",
      "RSDWOO"
    ],
    "colorScale": [
      "#6CF4EF",
      "#B74285",
      "#7D790A",
      "#537FF6",
      "#817323",
      "#BA3772",
      "#3A8E78",
      "#DC496E",
      "#B5E679",
      "#09ECB5",
      "#1E083C",
      "#F99928",
      "#B2979C"
    ],
    "unit": "PJ",
    "maxY": 127,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 120
  },
  "RSD_OtherServices_FuelCons": {
    "seriesNames": ["RSDELC", "RSDGAS", "RSDLPG"],
    "colorScale": ["#817323", "#3A8E78", "#09ECB5"],
    "unit": "PJ",
    "maxY": 40,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_RTFT_NRG_SAVINGS": {
    "seriesNames": ["RSDSH_Att", "RSDSH_Det"],
    "colorScale": ["#12C557", "#ED8E69"],
    "unit": "PJ",
    "maxY": 16,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "RSD_Services_EnergyCons": {
    "seriesNames": [
      "RSD_BLD-XXX_NRGSRV-CD",
      "RSD_BLD-XXX_NRGSRV-CK",
      "RSD_BLD-XXX_NRGSRV-CW",
      "RSD_BLD-XXX_NRGSRV-DW",
      "RSD_BLD-XXX_NRGSRV-LT",
      "RSD_BLD-XXX_NRGSRV-OE",
      "RSD_BLD-XXX_NRGSRV-PF",
      "RSD_BLD-XXX_NRGSRV-RF",
      "RSD_BLD-XXX_NRGSRV-WS"
    ],
    "colorScale": [
      "#2D974B",
      "#9E62F4",
      "#7822C8",
      "#C07738",
      "#D89B6F",
      "#4EB5FF",
      "#1900FF",
      "#DE3AAA",
      "#8E1BA9"
    ],
    "unit": "PJ",
    "maxY": 154,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "RSD_Services_CO2Emissions": {
    "seriesNames": ["RSD_BLD-XXX_NRGSRV-CK", "RSD_BLD-XXX_NRGSRV-WS"],
    "colorScale": ["#9E62F4", "#8E1BA9"],
    "unit": "kt",
    "maxY": 7673,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SUP_BIOGAS": {
    "seriesNames": [
      "SBIORGAS01",
      "SBIORGAS03",
      "SBIORGAS05",
      "SBIORGAS06",
      "SBIORGAS02"
    ],
    "colorScale": ["#F63ACD", "#311C7E", "#AD6978", "#BA2376", "#E688AE"],
    "unit": "PJ",
    "maxY": 58,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_FEC_Fuel": {
    "seriesNames": [
      "SEAI_BIOENERGY",
      "SEAI_COAL",
      "SEAI_ELECTRICITY",
      "SEAI_HEAT",
      "SEAI_HYDROGEN",
      "SEAI_NATGAS",
      "SEAI_OIL",
      "SEAI_OTHER_RENEWABLES",
      "SEAI_PEAT"
    ],
    "colorScale": [
      "#18187B",
      "#6341E2",
      "#528B54",
      "#471D27",
      "#08F68A",
      "#B0D2B1",
      "#902FFE",
      "#333EE6",
      "#6EB343"
    ],
    "unit": "PJ",
    "maxY": 721,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "SYS_FEC_Fuel_2": {
    "seriesNames": [
      "SEAI_BIOENERGY",
      "SEAI_COAL",
      "SEAI_ELECTRICITY",
      "SEAI_HEAT",
      "SEAI_HYDROGEN",
      "SEAI_NATGAS",
      "SEAI_OIL",
      "SEAI_OTHER_RENEWABLES",
      "SEAI_PEAT"
    ],
    "colorScale": [
      "#18187B",
      "#6341E2",
      "#528B54",
      "#471D27",
      "#08F68A",
      "#B0D2B1",
      "#902FFE",
      "#333EE6",
      "#6EB343"
    ],
    "unit": "PJ",
    "maxY": 721,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "SYS_NRG-Import": {
    "seriesNames": [
      "SEAI_BIOENERGY",
      "SEAI_COAL",
      "SEAI_ELECTRICITY",
      "SEAI_HYDROGEN",
      "SEAI_NATGAS",
      "SEAI_OIL"
    ],
    "colorScale": [
      "#18187B",
      "#6341E2",
      "#528B54",
      "#08F68A",
      "#B0D2B1",
      "#902FFE"
    ],
    "unit": "PJ",
    "maxY": 678,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_NRG-Ind_Supply": {
    "seriesNames": [
      "SEAI_BIOENERGY",
      "SEAI_NATGAS",
      "SEAI_OTHER_RENEWABLES",
      "SEAI_PEAT"
    ],
    "colorScale": ["#18187B", "#B0D2B1", "#333EE6", "#6EB343"],
    "unit": "PJ",
    "maxY": 597,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SYS_TPED": {
    "seriesNames": [
      "SEAI_BIOENERGY",
      "SEAI_COAL",
      "SEAI_ELECTRICITY",
      "SEAI_HYDROGEN",
      "SEAI_NATGAS",
      "SEAI_OIL",
      "SEAI_OTHER_RENEWABLES",
      "SEAI_PEAT"
    ],
    "colorScale": [
      "#18187B",
      "#6341E2",
      "#528B54",
      "#08F68A",
      "#B0D2B1",
      "#902FFE",
      "#333EE6",
      "#6EB343"
    ],
    "unit": "PJ",
    "maxY": 773,
    "minY": -6,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "SYS_NRG-Export": {
    "seriesNames": ["SEAI_ELECTRICITY"],
    "colorScale": ["#528B54"],
    "unit": "PJ",
    "maxY": 6,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SUP_HYDROGEN": {
    "seriesNames": ["SH2PCELC_01", "SH2PDELC_01"],
    "colorScale": ["#7ACE1A", "#02D57C"],
    "unit": "PJ",
    "maxY": 59,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SRV-COM_FEC_WS": {
    "seriesNames": [
      "SRVAHT",
      "SRVAHT2",
      "SRVBGS",
      "SRVBIO",
      "SRVCOA",
      "SRVELC",
      "SRVGAS",
      "SRVOIL",
      "SRVSOL",
      "SRVHET"
    ],
    "colorScale": [
      "#C826B7",
      "#849C6E",
      "#CE72C4",
      "#BDFAB2",
      "#BD23C0",
      "#2A093B",
      "#79E9B9",
      "#77587E",
      "#AEB022",
      "#C7D8A0"
    ],
    "unit": "PJ",
    "maxY": 33,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "SRV_FEC": {
    "seriesNames": [
      "SRVAHT",
      "SRVAHT2",
      "SRVBGS",
      "SRVBIO",
      "SRVCOA",
      "SRVELC",
      "SRVELC-DC-C",
      "SRVGAS",
      "SRVOIL",
      "SRVSOL",
      "SRVHET",
      "SRVLPG"
    ],
    "colorScale": [
      "#C826B7",
      "#849C6E",
      "#CE72C4",
      "#BDFAB2",
      "#BD23C0",
      "#2A093B",
      "#19715B",
      "#79E9B9",
      "#77587E",
      "#AEB022",
      "#C7D8A0",
      "#4ED2FF"
    ],
    "unit": "PJ",
    "maxY": 158,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "SRV-PUB_FEC_WS": {
    "seriesNames": [
      "SRVAHT",
      "SRVAHT2",
      "SRVBGS",
      "SRVBIO",
      "SRVELC",
      "SRVGAS",
      "SRVOIL",
      "SRVSOL",
      "SRVHET"
    ],
    "colorScale": [
      "#C826B7",
      "#849C6E",
      "#CE72C4",
      "#BDFAB2",
      "#2A093B",
      "#79E9B9",
      "#77587E",
      "#AEB022",
      "#C7D8A0"
    ],
    "unit": "PJ",
    "maxY": 29,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "SRV_FEC_DCs": {
    "seriesNames": ["SRVELC", "SRVELC-DC-C"],
    "colorScale": ["#2A093B", "#19715B"],
    "unit": "PJ",
    "maxY": 40,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "SRV-DCs_EH": {
    "seriesNames": ["SRVHET-DC-LT"],
    "colorScale": ["#060AF8"],
    "unit": "PJ",
    "maxY": 24,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_FEC": {
    "seriesNames": [
      "TRABDL",
      "TRABJK",
      "TRABNG",
      "TRACNG",
      "TRADST",
      "TRAELC",
      "TRAETH",
      "TRAGSL",
      "TRAH2",
      "TRAKER",
      "TRALNG"
    ],
    "colorScale": [
      "#ADD682",
      "#322776",
      "#06422C",
      "#EABD10",
      "#C76AC0",
      "#19487E",
      "#23B290",
      "#EE5257",
      "#F8D06F",
      "#637093",
      "#E2A0C9"
    ],
    "unit": "PJ",
    "maxY": 231,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "TRA_Freight_Land_FuelCons": {
    "seriesNames": [
      "TRABDL",
      "TRABNG",
      "TRACNG",
      "TRADST",
      "TRAELC",
      "TRAETH",
      "TRAGSL",
      "TRAH2",
      "TRALNG"
    ],
    "colorScale": [
      "#ADD682",
      "#06422C",
      "#EABD10",
      "#C76AC0",
      "#19487E",
      "#23B290",
      "#EE5257",
      "#F8D06F",
      "#E2A0C9"
    ],
    "unit": "PJ",
    "maxY": 112,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 90
  },
  "TRA_OTH_FuelCons": {
    "seriesNames": ["TRABDL", "TRACNG", "TRADST", "TRAETH", "TRAGSL"],
    "colorScale": ["#ADD682", "#EABD10", "#C76AC0", "#23B290", "#EE5257"],
    "unit": "PJ",
    "maxY": 22,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_Passenger_Land_FuelCons": {
    "seriesNames": [
      "TRABDL",
      "TRABNG",
      "TRACNG",
      "TRADST",
      "TRAELC",
      "TRAETH",
      "TRAGSL"
    ],
    "colorScale": [
      "#ADD682",
      "#06422C",
      "#EABD10",
      "#C76AC0",
      "#19487E",
      "#23B290",
      "#EE5257"
    ],
    "unit": "PJ",
    "maxY": 103,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 60
  },
  "TRA_TURS_FuelCons": {
    "seriesNames": ["TRABDL", "TRADST", "TRAELC"],
    "colorScale": ["#ADD682", "#C76AC0", "#19487E"],
    "unit": "PJ",
    "maxY": 11,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_NAV_FuelCons": {
    "seriesNames": ["TRABDL", "TRADST"],
    "colorScale": ["#ADD682", "#C76AC0"],
    "unit": "PJ",
    "maxY": 11,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_AVIDOM_FuelCons": {
    "seriesNames": ["TRABJK", "TRAKER"],
    "colorScale": ["#322776", "#637093"],
    "unit": "PJ",
    "maxY": 0,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_AVIINT_FuelCons": {
    "seriesNames": ["TRAKER"],
    "colorScale": ["#637093"],
    "unit": "PJ",
    "maxY": 63,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  },
  "TRA_Passenger_Land_Distance": {
    "seriesNames": ["TRAPL", "TRAPM", "TRAPS"],
    "colorScale": ["#1EC952", "#02C644", "#DC4155"],
    "unit": "Bpkm",
    "maxY": 115,
    "minY": 0,
    "xPeriods": xPeriods,
    "xGridMarks": xGridMarks,
    "height": 30
  }
};

export default chartsInfo;
