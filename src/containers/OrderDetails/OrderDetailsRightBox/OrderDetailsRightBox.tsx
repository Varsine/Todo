import React from 'react';

import OrderDetailsContainer from "containers/OrderDetails/OrderDetailsContainer/OrderDetailsContainer";
import InputFieldWithText from "components/InputFieldWithText/InputFieldWithText";
import TextareaField from 'components/TextareaField/TextareaField';
import ProfileInputIcon from "icons/ProfileInputIcon";
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import "./OrderDetailsRightBox.scss";

interface IOrderDetailsRightBoxProps {
    onChangeName: (value: string) => void;
    giftReceiverName: string;
    giftReceiverNameError: string;
    giftReceiverInputDisabled: boolean;
    info: string;
    onInfoChange: (val: string) => void;
};

const OrderDetailsRightBox: React.FC<IOrderDetailsRightBoxProps> = ({
    onChangeName,
    giftReceiverName,
    giftReceiverNameError,
    giftReceiverInputDisabled,
    info,
    onInfoChange,
    children,
}) => {
    return (
        <OrderDetailsContainer className="order-details-right" >
            <div className="order-details-right__check-box-div">
                <p className="order-details-right__check-box-div__text">Արդյոք սա նվե՞ր է</p>
                <div className="order-details-right__check-box-div__content">{children}</div>
            </div>
            <InputFieldWithText
                placeholder="Պողոս Պողոսյան"
                Icon={ProfileInputIcon}
                type='text'
                onChange={onChangeName}
                value={giftReceiverName}
                text="Նվերը ստացողի անունը և ազգանունը"
                disabled={giftReceiverInputDisabled}
            />
            <ErrorMessage>{giftReceiverNameError}</ErrorMessage>
            <div className="order-details-right__textarea-box">
                <p className="order-details-right__textarea-box__text">Մեկնաբանություններ</p>
                <TextareaField
                    className="order-details-right__textarea-box__area"
                    placeholder="Հավելյալ նշումներ"
                    value={info}
                    onChange={onInfoChange}
                />
            </div>
        </OrderDetailsContainer>
    );
}

export default OrderDetailsRightBox;