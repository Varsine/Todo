import React from "react"

import {Router} from "@reach/router"
import loadable from "@loadable/component"

const Landing = loadable(({path}) => import("containers/Landing/Landing"))
const Quiz = loadable(({path}) => import("containers/Quiz/Quiz"))
const OrderDetails = loadable(
  ({path}) => import("containers/OrderDetails/OrderDetails")
)
const Checkout = loadable(({path}) => import("containers/Checkout/Checkout"))
const Auth = loadable(({path}) => import("containers/Auth/Auth"))

interface IRoutesProps {}

const Routes: React.FC<IRoutesProps> = () => {
  return (
    <Router>
      <Landing path="/" />
      <Quiz path="/quiz" />
      <OrderDetails path="/order-details" />
      <Checkout path="/checkout" />
      <Auth path="/login" />
    </Router>
  )
}

export default Routes
