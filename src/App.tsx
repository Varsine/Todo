import React from "react";

import Routes from "routes/Routes";
import Layout from "components/Layout/Layout";
import Header from "containers/Header/Header";

import { LocationProvider, createHistory, createMemorySource } from "@reach/router";
import { AppContextProvider } from "app-context/AppContextProvider";

const source = createMemorySource("/");
const history = createHistory(source);

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <LocationProvider history={history}>
          <Header />
          <Layout>
            <Routes />
          </Layout>
        </LocationProvider>
      </AppContextProvider>
    </div>
  )
};

export default App;