import React from 'react';

import './AnimatedHamburger.scss';

const AnimatedHamburger: React.FC<{ open: boolean }> = ({ open }) => {
    return (
        <div id="nav-icon3" className={open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default AnimatedHamburger;
