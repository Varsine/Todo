import React from "react";
import { Router } from "@reach/router";
import loadable from "@loadable/component";

const Landing = loadable(({ path }) => import("containers/Landing/Landing"));
const Quiz = loadable(({ path }) => import("containers/Quiz/Quiz"));
const OrderDetails = loadable(({ path }) => import("containers/OrderDetails/OrderDetails"))
const Checkout = loadable(({ path }) => import("containers/Checkout/Checkout"));
const Auth = loadable(({ path }) => import("containers/Auth/Auth"));
const Header = loadable(({ path }) => import("containers/Header/Header"));

interface IRoutesProps { }

const Routes: React.FC<IRoutesProps> = () => {
  return (
    <>
      <Router primary={false}>
        <Header path="*" />
      </Router>
      <Router>
        <Landing path="/" />
        <Quiz path="/quiz" />
        <OrderDetails path="/order-details" />
        <Checkout path="/checkout" />
        <Auth path="/auth" />
      </Router>
    </>
  )
}

export default Routes;