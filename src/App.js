import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase/app"
import "firebase/auth"


import {firebaseConfig} from "./api/firebaseConfig"
import {appReducer} from './reducer/appReducer';
import Todo from './containers/Todo/Todo';

import "./global.scss"

firebase.initializeApp(firebaseConfig)

const store = createStore(appReducer)

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  )
};

export default App;