import { ADD_NUMBER, REDUCE_NUMBER, RESET_NUMBER } from "../type";

export const addNumber = (number) => (dispatch) => {
  dispatch({
    type: ADD_NUMBER,
    payload: number,
  });
};

export const reduceNumber = (number) => (dispatch) => {
  dispatch({
    type: REDUCE_NUMBER,
    payload: number,
  });
};

export const resetNumber = (number) => (dispatch) => {
  dispatch({
    type: RESET_NUMBER,
    payload: number,
  });
};
