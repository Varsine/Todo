import React from 'react';

import Link from 'components/Link/Link'
import FbFooterIcon from 'icons/FbFooterIcon';
import InstaFooterIcon from 'icons/InstaFooterIcon';
import TextBlock from "components/TextBlock/TextBlock";

import "./FooterSocialMedia.scss";

interface IFooterSocialMediaProps {};

const FooterSocialMedia: React.FC<IFooterSocialMediaProps> = () => {
  return (
    <div className="footer-social-media">
      <TextBlock>Գտիր մեզ սոց․ցանցերում</TextBlock>
      <div>
        <Link
          className="footer-social-media__link"
          to="/https://www.facebook.com/boxyyerevan"
        >
          <FbFooterIcon />
        </Link>
        <Link
          className="footer-social-media__link"
          to="https://www.instagram.com/boxy_armenia/"
        >
          <InstaFooterIcon />
        </Link>
      </div>
    </div>
  )
}

export default FooterSocialMedia;