import React from 'react';

import { Router } from "@reach/router"

import Landing from './containers/Landing/Landing';
import Quiz from './containers/Quiz/Quiz';
import OrderDetails from './containers/OrderDetails/OrderDetails';
import Checkout from './containers/Checkout/Checkout';
import Login_Signup from './containers/Login_Signup/Login_Signup';

interface IRoutesProps { };

const Routes: React.FC<IRoutesProps> = () => {
    return (
        <Router>
            <Landing path="/" />
            <Quiz path="/quiz" />
            <OrderDetails path="/order-details" />
            <Checkout path="/checkout" />
            <Login_Signup path="/login" />
        </Router>
    )
}


export default Routes;