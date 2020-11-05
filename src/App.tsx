import React from "react";

import Routes from "routes/Routes";
import Layout from "components/Layout/Layout";

import { AppContextProvider } from "app-context/AppContextProvider";

const App = () => {
  return (
    <div>
      <AppContextProvider>
          <Layout>
            <Routes />
          </Layout>
      </AppContextProvider>
    </div>
  )
};

export default App;