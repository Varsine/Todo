import React from "react";

import CartIcon from "icons/CartIcon";
import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";
import Link from "components/Link/Link";

import "./Header.scss";

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
  const buttonClick = () => { }

  return (
    <header className="app-header">
      <Logo />
      <div className="app-header__right-column">
        <nav className="app-header__right-column__navigation">
          <ul>
            <li>
              <Link to="">Նորություններ</Link>
            </li>
            <li>
              <Link to="">Մեր մասին</Link>
            </li>
          </ul>
        </nav>
        <div className="app-header__right-column__profile-header-icon">
          <ProfileHeaderIcon />
        </div>
        <div className="app-header__right-column__cart-icon">
          <CartIcon />
        </div>
        <Button onClick={buttonClick}>Մուտք</Button>
      </div>
    </header>
  )
}

export default Header
