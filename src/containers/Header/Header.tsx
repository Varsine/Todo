import React from "react"
import {Link} from "@reach/router"

import CartIcon from "icons/CartIcon"
import Button from "components/Button/Button"
import Logo from "components/Logo/Logo"
import ProfileHeaderIcon from "icons/ProfileHeaderIcon"

import "./Header.scss"

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header-right-column">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="">Նորություններ</Link>
            </li>
            <li>
              <Link to="">Մեր մասին</Link>
            </li>
          </ul>
        </nav>
        <ProfileHeaderIcon />
        <CartIcon />
        <Button text="Մուտք" />
      </div>
    </header>
  )
}

export default Header
