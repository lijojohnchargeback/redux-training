import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  reduceNumber,
  resetNumber,
} from "../store/action/calculator";
const Calculation = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.calculate.number);
  const handleAdd = () => {
    dispatch(addNumber(value + 1));
  };
  const handleReduce = () => {
    dispatch(reduceNumber(value - 1));
  };
  const handleReset = () => {
    dispatch(resetNumber(0));
  };

  return (
    <Fragment>
      <h1>Button Calculation</h1>

      <div style={{ marginLeft: 30, display: "flex" }}>
        <h3>{value}</h3>
        <button
          style={{ backgroundColor: "blue", marginLeft: 20, marginRight: 20 }}
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          style={{ backgroundColor: "yellow", marginLeft: 20, marginRight: 20 }}
          onClick={handleReduce}
        >
          Reduce
        </button>
        <button
          style={{ backgroundColor: "red", marginLeft: 20, marginRight: 20 }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </Fragment>
  );
};

export default Calculation;
