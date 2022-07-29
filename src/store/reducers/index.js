import { ALERT_CREATE } from "../type";

const intialState = {
  alert: "",
};

const alertReducer = (state = intialState, action) => {
  switch (action.type) {
    case ALERT_CREATE:
      return {
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default alertReducer;
