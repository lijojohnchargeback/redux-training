import { ADD_NUMBER, REDUCE_NUMBER, RESET_NUMBER } from "../type";

const initialState = {
  number: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: action.payload,
      };
    case REDUCE_NUMBER:
      return {
        number: action.payload,
      };
    case RESET_NUMBER:
      return {
        number: action.payload,
      };
    default:
      return state;
  }
};
export default calculatorReducer;
