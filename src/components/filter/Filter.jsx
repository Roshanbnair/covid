import React, {useState} from "react";
import "./filter.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import covidData from "../../covidData.json";
import {useDispatch} from "react-redux";
import { setStateData } from "../../store/stateSlice";


const animatedComponents = makeAnimated();

const Filter = () => {
  const dispatch = useDispatch();

  const options = covidData.India.states.map((state) => ({
    value: state.name,
    label: state.name,
  }));

  const handleChange = (selected) => {
    console.log("hmmm:",selected.value)
    if (!selected) return;
    const selectedStateName = selected.value;
    const selectedStateData = covidData.India.states.find(
      (state) => state.name === selectedStateName
    );
    dispatch(
      setStateData({state: selectedStateName, data: selectedStateData})
    );
  };

  // const getCovidDetails = (stateName) => {
  //   return covidData.India.states.find((state) => state.name == stateName);
  // };

  return (
    <div>
      <Select
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={options}
        // isMulti
        onChange={handleChange}
      />
      {/* <div className="selected-values">
        <h3>Selected States and COVID-19 Details:</h3>
        {selectedStates.map((state) => {
          const details = getCovidDetails(state.value);
          return (
            <div key={state.value}>
              <h4>{state.label}</h4>
              <ul>
                <li>Total Cases: {details.totalCases}</li>
                <li>Active Cases: {details.activeCases}</li>
                <li>Recovered: {details.recovered}</li>
                <li>Deaths: {details.deaths}</li>
              </ul>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Filter;
