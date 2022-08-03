import APICall from "../../component/ApiCall";
import { FETCH_API } from "../type";
import axios from "axios";

export const fetchSApi = (formData) => async (dispatch) => {
  const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
  dispatch({
    type: FETCH_API,
    payload: res.data,
  });
};
