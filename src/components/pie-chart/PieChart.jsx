import React from "react";
import "./piechart.css";
import Plot from "react-plotly.js";
import {useSelector} from "react-redux";

const PieChart = () => {
  const stateData = useSelector((state) => state.stateData.stateData);
  return (
    <div>
      <Plot
        data={[
          {
            values: [
              stateData.activeCases,
              stateData.recovered,
              stateData.deaths,
            ],
            labels: ["Active Cases", "Recovered", "Deaths"],
            type: "pie",
          },
        ]}
        layout={{
          width: 580,
          height: 380,
          title: `State of ${stateData.name} (Toal cases - ${stateData.totalCases})`,
        }}
      />{" "}
    </div>
  );
};

export default PieChart;
