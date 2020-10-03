import React from "react";

import Link from "components/Link/Link";
import Heading from "components/HeaderCart/HeaderCart";

import "./FooterServices.scss"

interface IFooterServicesProps {}

const FooterServices: React.FC<IFooterServicesProps> = () => {
  return (
    <div className="footer-services">
      <Heading>Սպասարկում</Heading>
      <Link className="footer-services__link" to="/faq">
        Հաճախ տրվող հարցեր
      </Link>
      <Link className="footer-services__link" to="/return-policy">
        Վերադարձի պայմաններ
      </Link>
      <Link className="footer-services__link" to="/terms-of-use">
        Օգտվելու կանոններ
      </Link>
    </div>
  )
}

export default FooterServices
