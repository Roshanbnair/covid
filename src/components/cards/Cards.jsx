import React from "react";
import "./cards.css";
import Card from "./card/Card";
import covidData from "../../covidData.json";

const Cards = () => {
  const totals = covidData.India.states.reduce(
    (acc, state) => {
      acc.totalCases += state.totalCases;
      acc.activeCases += state.activeCases;
      acc.recovered += state.recovered;
      acc.deaths += state.deaths;
      return acc;
    },
    {
      totalCases: 0,
      activeCases: 0,
      recovered: 0,
      deaths: 0,
    }
  );

  const cardsData = [
    {
      title: "Total Cases",
      value: totals.totalCases,
      color:
        "linear-gradient(120deg, rgb(135, 200, 255) 0%, rgb(255, 255, 255) 100%)",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMhiw8eQtz8fmPCyuY-_VOYFkpVhp7CZXag&s",
      iconColor: "rgb(135, 200, 255) ",
    },
    {
      title: "Recovered",
      value: totals.recovered,
      color:
        "linear-gradient(120deg, rgb(127, 255, 135) 0%, rgb(255, 255, 255) 100%)",
      image:
        "https://media.istockphoto.com/id/1356830244/photo/coronavirus-cells-3d-render.jpg?s=612x612&w=0&k=20&c=uTb50qiLZxkqPMu2-lIeOz5OW6dH_zCyHtoiRT-CkMQ=",
      iconColor: " rgb(127, 255, 135)",
    },
    {
      title: "Active Cases",
      value: totals.activeCases,
      color:
        "linear-gradient(120deg, rgb(251, 212, 119) 0%, rgb(255, 255, 255) 100%)",
      image:
        "https://media.istockphoto.com/id/1356830244/photo/coronavirus-cells-3d-render.jpg?s=612x612&w=0&k=20&c=uTb50qiLZxkqPMu2-lIeOz5OW6dH_zCyHtoiRT-CkMQ=",
      iconColor: " rgb(251, 212, 119)",
    },

    {
      title: "Deaths",
      value: totals.deaths,
      color:
        "linear-gradient(120deg, rgb(247, 128, 128) 0%, rgb(255, 255, 255) 100%)",
      image:
        "https://media.istockphoto.com/id/1356830244/photo/coronavirus-cells-3d-render.jpg?s=612x612&w=0&k=20&c=uTb50qiLZxkqPMu2-lIeOz5OW6dH_zCyHtoiRT-CkMQ=",
      iconColor: " rgb(247, 128, 128)",
    },
  ];

  console.log("shHYE", cardsData);

  return (
    <div
      style={{
        width: "1215px",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      {cardsData.map((card, el) => (
        <Card
          key={el}
          title={card.title}
          value={card.value}
          color={card.color}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
};

export default Cards;
