import React from 'react';

import Link from 'components/Link/Link';
import Heading from "components/HeaderCart/HeaderCart";

import "./Services.scss";

interface IServicesProps {};

const Services: React.FC<IServicesProps> = () => {
  return (
    <div className="app-services">
      <Heading>Սպասարկում</Heading>
      <Link className="app-services__link" to="/faq">
        Հաճախ տրվող հարցեր
      </Link>
      <Link className="app-services__link" to="/return-policy">
        Վերադարձի պայմաններ
      </Link>
      <Link className="app-services__link" to="/terms-of-use">
        Օգտվելու կանոններ
      </Link>
    </div>
  )
}

export default Services