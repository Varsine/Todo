import React, { useRef, useEffect, useState, useContext } from "react";
import { useLocation } from '@reach/router';

import Link from "components/Link/Link";
import Button from "components/Button/Button";
import BoxyLogo from "icons/BoxyLogo";
import WhiteBoxyLogo from "icons/WhiteBoxyLogo";
import MobileMenuIcon from "icons/MobileMenuIcon";
import ProfileHeaderIcon from "icons/ProfileHeaderIcon";
import CartIcon from "icons/CartIcon";
import Cart from "containers/Cart/Cart";
import { AppContext } from 'app-context/appContext';
import { DeviceTypes } from "app-context/contextTypes";

import "./Header.scss";

interface IHeaderProps { }

const Header: React.FC<IHeaderProps> = () => {
  const navRef = useRef<HTMLElement>(null);
  const [headerBackgrounded, setHeaderBackgrounded] = useState("");
  const [cartMenu, setCartMenu] = useState(false);
  const [mobileCart, setMobileCart] = useState("");
  const { state: { device } } = useContext(AppContext);
  const loc = useLocation();

  const toggleCartMenu = () => {
    setCartMenu(!cartMenu);
  }
  const scrollHandler = () => {
    if (window.scrollY > 100) {
      setHeaderBackgrounded("scrolled");
    } else {
      setHeaderBackgrounded("");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, []);

  const openMobileMenu = () => {
    navRef.current?.classList.toggle("mobile-menu");
    setMobileCart("mobile-cart");
    if (!navRef.current?.className.includes("mobile-menu")) {
      setMobileCart("");
    }
  }

  const suggestionClick = () => { }

  const isColoredLogo = headerBackgrounded || (device !== DeviceTypes.desktop) || loc.pathname !== '/';

  return (
    <header id="app-header" className={`app-header ${headerBackgrounded}`}>
      <div className="app-header__mobile-menu-icon" onClick={openMobileMenu}>
        <MobileMenuIcon />
      </div>
      <div className="app-header__logo">
        <Link to='/'>
          {isColoredLogo ? <BoxyLogo /> : <WhiteBoxyLogo />}
        </Link>
      </div>
      <div className="app-header__right-column">
        <nav className="app-header__right-column__navigation" ref={navRef}>
          <ul>
            <li>
              <Link to="/order-details">Նորություններ</Link>
            </li>
            <li>
              <Link to="/about-us">Մեր մասին</Link>
            </li>
            <div className="app-header__right-column__navigation__mobile-column">
              <li>
                <Link to="/auth">Մուտք</Link>
              </li>
              <li>
                <Link to="/profile">Անձնական էջ</Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="app-header__right-column__profile-header-icon">
          <Link to="/profile">
            <ProfileHeaderIcon />
          </Link>
        </div>
        <div
          className="app-header__right-column__cart-icon"
          onClick={toggleCartMenu}
        >
          <CartIcon />
        </div>
        <Link to="/auth">
          <Button
            className="app-header__right-column__button"
            onClick={suggestionClick}
          >
            Մուտք
        </Button>
        </Link>
      </div>
      {cartMenu && (
        <Cart className={mobileCart} closeCartMenu={toggleCartMenu} />
      )}
    </header>
  )
}

export default Header;