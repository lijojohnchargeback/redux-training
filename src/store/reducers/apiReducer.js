import { FETCH_API } from "../type";

const initialValue = {
  data: [],
};
const apiReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCH_API:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
export default apiReducer;
