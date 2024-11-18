import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import Filter from "./components/filter/Filter";
import Cards from "./components/cards/Cards";
import Map from "./components/map/Map";
import PieChart from "./components/pie-chart/PieChart";
import Graph from "./components/graph/Graph";

function App() {
  return (
    <>
      <div className="dashboard-top">
        <div className="header-app">
          <Header />
        </div>
        <div className="card-app">
          <Cards />
        </div>
        <div className="filter-app">
          <Filter />
        </div>
      </div>
      <div className="dashboard-bottom">
        <div className="piechart-app">
          <PieChart />
        </div>
        <div className="graph-app">
          <Graph />
        </div>
      </div>
      <div className="map-app">
        <Map />
      </div>
    </>
  );
}

export default App;
