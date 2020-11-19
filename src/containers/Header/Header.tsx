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
import { ActionTypes } from "app-context/actionTypes";

import "./Header.scss";

const Header: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const timerRef = useRef<any>(null);
  const [headerBackgrounded, setHeaderBackgrounded] = useState("");
  const [mobileCart, setMobileCart] = useState("");
  const [animate, setAnimate] = useState(false);
  const { state: { device, isCartOpen, orders }, dispatch } = useContext(AppContext);
  const loc = useLocation();

  const toggleCartMenu = () => {
    dispatch({ type: ActionTypes.TOGGLE_CART });
  }
  isCartOpen && document.body.classList.add('lock-scroll');

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

  useEffect(() => {
    if (orders.length > 0) {
      setAnimate(false);
      setAnimate(true);
      if (timerRef && timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setAnimate(false);
      }, 1000)
    }
  }, [orders])

  const openMobileMenu = () => {
    navRef.current?.classList.toggle("mobile-menu");
    setMobileCart("mobile-cart");
    if (!navRef.current?.className.includes("mobile-menu")) {
      setMobileCart("");
    }
  }
  navRef.current?.className.includes("mobile-menu") && document.body.classList.add('lock-scroll');

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
            <li><Link to="/news">Նորություններ</Link></li>
            <li><Link to="/about-us">Մեր մասին</Link></li>
            <div className="app-header__right-column__navigation__mobile-column">
              <li><Link to="/auth">Մուտք</Link></li>
              <li><Link to="/profile">Անձնական էջ</Link></li>
            </div>
          </ul>
        </nav>
        <div className="app-header__right-column__profile-header-icon">
          <Link to="/profile">
            <ProfileHeaderIcon />
          </Link>
        </div>
        <div
          className={`app-header__right-column__cart-icon${animate ? ' app-header__right-column__cart-icon--animate' : ''}`}
          onClick={toggleCartMenu}
        >
          <CartIcon />
          <div className={`app-header__right-column__cart-icon__bell${orders.length > 0 ? ' app-header__right-column__cart-icon__bell--show' : ''}`}>
            <span>{orders.length}</span>
          </div>
        </div>
        <Link to="/auth">
          <Button
            className="app-header__right-column__button"
            onClick={() => { }}
          >
            Մուտք
        </Button>
        </Link>
      </div>
      {isCartOpen && (
        <Cart className={mobileCart} closeCartMenu={toggleCartMenu} />
      )}
    </header>
  )
}

export default Header;