import axios from "axios";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSApi } from "../store/action/api";
//api  get
const APICall = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.api.data);
  React.useEffect(() => {
    dispatch(fetchSApi());
  }, []);
  return (
    <div style={{ marginLeft: 10 }}>
      <h1>List </h1>
      {data.map((item) => {
        return (
          <div style={{ marginLeft: 10 }} key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
            <p>{item.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default APICall;
