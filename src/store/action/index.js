import { ALERT_CREATE } from "../type";

export const alertCreate = (alertMessage) => (dispatch) => {
  console.log(alertMessage, "action file");
  dispatch({ type: ALERT_CREATE, payload: alertMessage });
};
