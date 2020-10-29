import React, { Children } from 'react';

import OrderDetailsContainer from "components/OrderDetailsContainer/OrderDetailsContainer";
import InputFieldWithText from "components/InputFieldWithText/InputFieldWithText";
import ProfileInputIcon from "icons/ProfileInputIcon";

import "./OrderDetailsRightBox.scss";

interface IOrderDetailsRightBoxProps {
    onChangeName: (value: string) => void;
    getterName: string;
};

const OrderDetailsRightBox: React.FC<IOrderDetailsRightBoxProps> = ({
    onChangeName,
    getterName,
    children,
}) => {

    return (
        <OrderDetailsContainer>
            <div>
                <p>Արդյոք սա նվե՞ր է</p>
                <div>{children}</div>
            </div>
            <InputFieldWithText
                placeholder="Պողոս Պողոսյան"
                Icon={ProfileInputIcon}
                type='text'
                onChange={onChangeName}
                value={getterName}
                text="Նվերը ստացողի անունը և ազգանունը"
            />
            <div>
                <p>Մեկնաբանություններ</p>
                <textarea>Հավելյալ նշումներ</textarea>
            </div>
        </OrderDetailsContainer>
    );
}

export default OrderDetailsRightBox;