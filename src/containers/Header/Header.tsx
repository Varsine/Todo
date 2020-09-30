import React from "react"

import CartIcon from "./../../icons/CartIcon"
import Button from "./../../components/Button/Button"
import Layout from "components/Layout/Layout"

import "./Header.scss"
import Logo from "components/Logo/Logo"
import ProfileHeaderIcon from "icons/ProfileHeaderIcon"

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header>
      <Logo />
      <div className="header-right-colum">
        <Layout />
        <ProfileHeaderIcon />
        <CartIcon />
        <Button />
      </div>
    </header>
  )
}

export default Header
