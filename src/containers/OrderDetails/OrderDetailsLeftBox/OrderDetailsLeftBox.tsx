import React from 'react';

import OrderDetailsContainer from "containers/OrderDetails/OrderDetailsContainer/OrderDetailsContainer";
import InputFieldWithText from "components/InputFieldWithText/InputFieldWithText";
import LocationIcon from 'icons/LocationIcon';
import PhoneIcon from 'icons/PhoneIcon';
import MailIcon from "icons/MailIcon";
import ProfileInputIcon from "icons/ProfileInputIcon";

interface IOrderDetailsLeftBoxProps {
    onChangeName: (value: string) => void;
    onChangeAddress: (value: string) => void;
    onChangeEmail: (value: string) => void;
    onChangePhone: (value: string) => void;
    name: string;
    address: string;
    email: string;
    phone: string;
};

const OrderDetailsLeftBox: React.FC<IOrderDetailsLeftBoxProps> = ({
    onChangeName,
    onChangeAddress,
    onChangeEmail,
    onChangePhone,
    name,
    address,
    email,
    phone
}) => {
    return (
        <OrderDetailsContainer>
            <InputFieldWithText
                placeholder="Պողոս Պողոսյան"
                Icon={ProfileInputIcon}
                type='text'
                onChange={onChangeName}
                value={name}
                text="Անուն և Ազգանուն"
            />
            <InputFieldWithText
                placeholder="Բաղրամյան 26, Երևան"
                Icon={LocationIcon}
                type='text'
                onChange={onChangeAddress}
                value={address}
                text="Առաքման հասցե"
            />
            <InputFieldWithText
                placeholder="+374 55-55-55"
                Icon={PhoneIcon}
                type='number'
                onChange={onChangePhone}
                value={phone}
                text="Հեռախոսահամար"
            />
            <InputFieldWithText
                placeholder="example@yahoo.com"
                Icon={MailIcon}
                type='email'
                onChange={onChangeEmail}
                value={email}
                text="Էլ․հասցե"
            />
        </OrderDetailsContainer>
    );
}

export default OrderDetailsLeftBox;