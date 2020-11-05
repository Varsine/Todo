import React from 'react';

import "./OrderDetailsContainer.scss";

interface IOrderDetailsContainerProps {
    className?: string;
};

const OrderDetailsContainer: React.FC<IOrderDetailsContainerProps> = ({
    className,
    children
}) => {
    return (<div className={`order-details-container ${className}`}>{children}</div>);
}

export default OrderDetailsContainer;