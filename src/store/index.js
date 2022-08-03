import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./reducers";
import apiReducer from "./reducers/apiReducer";
import calculatorReducer from "./reducers/calculator";
const reducers = combineReducers({
  alerts: alertReducer,
  calculate: calculatorReducer,
  api: apiReducer,
});

export const init = () => {
  const rootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    //     if (action.type === PROFILE_CLEAR) state = undefined;
    return reducers(state, action);
  };
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
