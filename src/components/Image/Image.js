import React from 'react';

import "./Image.scss";

const Image = ({src}) => {
    return (
        <img className="app-image" src={src} alt=""/>
    )
}

export default Image;