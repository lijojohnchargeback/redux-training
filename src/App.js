import React, { Fragment } from "react";
import { Provider } from "react-redux";
import Alert from "./component/Alert";
import Calculation from "./component/Calculation";
import DocTitle from "./component/Doc";
import { init } from "./store";

const App = () => {
  const store = init();
  return (
    <Provider store={store}>
      <Calculation />
      <DocTitle />
    </Provider>
  );
};

export default App;
