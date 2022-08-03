import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Alert from "./component/Alert";
import APICall from "./component/ApiCall";
import Calculation from "./component/Calculation";
import ParentComponent from "./component/Parent";
import { init } from "./store";
import { resetNumber } from "./store/action/calculator";

const App = () => {
  const store = init();
  const [number, setNumber] = React.useState(1);

  return (
    <Provider store={store}>
      {/* <Calculation />
      <ParentComponent /> */}
      <button onClick={() => setNumber(2)}>Rerender</button>
      <APICall number={number} />
    </Provider>
  );
};

export default App;
