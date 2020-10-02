import React from 'react';

import Link from 'components/Link/Link'
import FbFooterIcon from 'icons/FbFooterIcon';
import InstaFooterIcon from 'icons/InstaFooterIcon';
import Heading from "components/HeaderCart/HeaderCart";

import "./SocialMedia.scss"

interface ISocialMediaProps {};

const SocialMedia: React.FC<ISocialMediaProps> = () => {
  return (
    <div className="app-social-media">
      <Heading>Գտիր մեզ սոց․ցանցերում</Heading>
      <div>
        <Link
          className="app-social-media__link"
          to="/https://www.facebook.com/boxyyerevan"
        >
          <FbFooterIcon />
        </Link>
        <Link
          className="app-social-media__link"
          to="https://www.instagram.com/boxy_armenia/"
        >
          <InstaFooterIcon />
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia