import React from 'react';
import {Provider} from "react-redux";
import {store} from "../../store";
import MainPage from "../pages/main-page";
import ErrorBoundary from "../error-boundary/error-boundary";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <MainPage/>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
