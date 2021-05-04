import Competitions from "../src/components/competitions/competitions";
// import WorldCupCZE from "../src/components/competitions/worldCupCZE/worldCupCZE";
// import ManPurscuizCZE from "../src/components/competitions/worldCupCZE/menPurscuir/ManPurscuizCZE";
// import WomanPurscuizCZE from "../src/components/competitions/worldCupCZE/womenPurscuir/WomanPurscuirCZE";
// import ManSprintCZE from "../src/components/competitions/worldCupCZE/menSprint/MenSprintCZE";
// import MixedRelayCZE from "../src/components/competitions/worldCupCZE/mixedRelay/MixedRelayCZE";
// import MixedRelaySingle from "../src/components/competitions/worldCupCZE/mixedRelaySingle/MixedRelaySingleCZE";
// import WomanSprintCZE from "../src/components/competitions/worldCupCZE/womenSprint/WomanSprintCZE";
// import WorldCupSWE from "../src/components/competitions/worldCupSWE/WorldCupSWE";
// import MenPurscuizSWE from "../src/components/competitions/worldCupSWE/menPurscuir/MenPursingSWE";
// import WomanPurscuirSWE from "../src/components/competitions/worldCupSWE/womenPurscuir/WomanPurscuirSWE";
// import ManSprintSWE from "../src/components/competitions/worldCupSWE/menSprint/ManSprintSWE";
// import MenMasstartSWE from "../src/components/competitions/worldCupSWE/menMassStart/MenMasstartSWE";
// import WomanMassstartSWE from "../src/components/competitions/worldCupSWE/womenMassStart/WomanMassstartSWE";
// import WomanSprintSWE from "../src/components/competitions/worldCupSWE/womenSprint/WomanSprintSWE";
import Sportsmans from "../src/components/sportsmens/Sportsmans";
// import MenList from "../src/components/sportsmens/men/MenList";
// import WomenList from "../src/components/sportsmens/women/WomenList";
import DashboardLayout from "../src/components/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "competitions",
        element: <Competitions />,
        children: [
          // {
          //   path: "worldCupCZE",
          //   element: <WorldCupCZE />,
          //   children: [
          //     { path: "menPurscuir", element: <ManPurscuizCZE /> },
          //     { path: "womenPurscuir", element: <WomanPurscuizCZE /> },
          //     { path: "menSprint", element: <ManSprintCZE /> },
          //     { path: "womenSprint", element: <WomanSprintCZE /> },
          //     { path: "mixedRelay", element: <MixedRelayCZE /> },
          //     { path: "mixedRelaySingle", element: <MixedRelaySingle /> },
          //   ],
          // },
          // {
          //   path: "worldCupSWE",
          //   element: <WorldCupSWE />,
          //   children: [
          //     { path: "menPurscuir", element: <MenPurscuizSWE /> },
          //     { path: "womenPurscuir", element: <WomanPurscuirSWE /> },
          //     { path: "menSprint", element: <ManSprintSWE /> },
          //     { path: "womenSprint", element: <WomanSprintSWE /> },
          //     { path: "menMassStart", element: <MenMasstartSWE /> },
          //     { path: "womenMassStart", element: <WomanMassstartSWE /> },
          //   ],
          // },
        ],
      },
      {
        path: "sportsmans",
        element: <Sportsmans />,
        children: [
          // {
          //   path: "menList",
          //   element: <MenList />,
          // },
          // {
          //   path: "womenList",
          //   element: <WomenList />,
          // },
        ],
      },
      // { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: [
  //     { path: "404", element: <NotFound /> },
  //     { path: "/", element: <Navigate to="/biathlon" /> },
  //   ],
  // },
];

export default routes;
