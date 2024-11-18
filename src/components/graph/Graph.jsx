import React from "react";
import "./graph.css";
import Plot from "react-plotly.js";
import {useDispatch, useSelector} from "react-redux";

const Graph = () => {
  const stateData = useSelector((state) => state.stateData.stateData);
  const data = [
    {
      y: [
        stateData.totalCases,
        stateData.activeCases,
        stateData.recovered,
        stateData.deaths,
      ], // X-axis labels
      x: ["Total", "Active", "Recovered", "Deaths"], // Y-axis values
      type: "scatter", // Type of chart
      mode: "lines+markers", // Line and markers
      marker: {color: "blue"}, // Marker color
      name: stateData.name, // Legend name
    },
    // {
    //   x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    //   y: [5, 15, 10, 20, 25, 40],
    //   type: "scatter",
    //   mode: "lines+markers",
    //   marker: {color: "green"},
    //   name: "Data B",
    // },
  ];

  const layout = {
    title: `${stateData.name} Statistics`, // Chart title
    xaxis: {title: "Cases"}, // X-axis label
    yaxis: {title: "Values"}, // Y-axis label
    plot_bgcolor: "#f5f5f5", // Background color
    paper_bgcolor: "white",

  };
  return (
    <div className="graph-component">
      <Plot
        data={data}
        layout={layout}
        style={{width: "580px", height: "380px", borderRadius: "100px"}}
      />
    </div>
  );
};

export default Graph;
