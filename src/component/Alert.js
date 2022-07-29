import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertCreate } from "../store/action";

const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alerts.alert);
  if (alert.length > 0) {
    window.alert(alert);
  }
  const handleClick = () => {
    dispatch(alertCreate("Something wrong. Please check it"));
  };

  return (
    <Fragment>
      <h1>Alert componet</h1>
      <button onClick={handleClick}>Show alert</button>
    </Fragment>
  );
};

export default Alert;
