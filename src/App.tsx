import React from "react";
import Routes from "./Routes";
import stone from "./redux/stone";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={stone}>
      <div>
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
