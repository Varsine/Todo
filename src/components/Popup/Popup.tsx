import React, { useEffect } from 'react';

import CloseIcon from 'icons/CloseIcon';
import TextBlock from 'components/TextBlock/TextBlock';

import "./Popup.scss";

interface IPopupProps {
    title: string;
    onClose?: () => void;
    className?: string;
    closeIcon?: boolean;
};

const Popup: React.FC<IPopupProps> = ({
    title,
    children,
    onClose = () => { },
    className,
    closeIcon = true
}) => {
    useEffect(() => {
        document.body.classList.add('lock-scroll');
        return () => {
            document.body.classList.remove('lock-scroll');
        }
    }, [])

    return (
        <div className="app-popup">
            <div className="app-popup__basis" onClick={onClose}></div>
            <div className='app-popup__inner'>
                {closeIcon && (
                    <div className="app-popup__inner__close-icon" onClick={onClose}>
                        <CloseIcon />
                    </div>
                )}
                <div className={`app-popup__inner__content ${className}`}>
                    <TextBlock className="app-popup__inner__content__title">{title}</TextBlock>
                    <div className='app-popup__inner__content__children'>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Popup;