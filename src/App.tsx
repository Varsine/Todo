import React from "react";
import firebase from 'firebase/app';
import 'firebase/auth';

import Routes from "routes/Routes";
import Layout from "components/Layout/Layout";

import { AppContextProvider } from "app-context/AppContextProvider";
import { firebaseConfig } from "api/firebaseConfig";

firebase.initializeApp(firebaseConfig);

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