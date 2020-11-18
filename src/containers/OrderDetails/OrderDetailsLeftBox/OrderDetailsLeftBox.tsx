import React from 'react';

import OrderDetailsContainer from "containers/OrderDetails/OrderDetailsContainer/OrderDetailsContainer";
import InputFieldWithText from "components/InputFieldWithText/InputFieldWithText";
import LocationIcon from 'icons/LocationIcon';
import MailIcon from "icons/MailIcon";
import ProfileInputIcon from "icons/ProfileInputIcon";
import PhoneInput from 'components/PhoneInput/PhoneInput';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

interface IOrderDetailsLeftBoxProps {
    onChangeName: (value: string) => void;
    onChangeAddress: (value: string) => void;
    onChangeEmail: (value: string) => void;
    onChangePhone: (value: string) => void;
    name: string;
    address: string;
    email: string;
    phone: string;
    errors: {
        nameError: string,
        shippingAddress: string,
        phoneError: string,
        emailError: string,
    }
};

const OrderDetailsLeftBox: React.FC<IOrderDetailsLeftBoxProps> = ({
    onChangeName,
    onChangeAddress,
    onChangeEmail,
    onChangePhone,
    name,
    address,
    email,
    phone,
    errors,
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
            <ErrorMessage>{errors.nameError}</ErrorMessage>
            <InputFieldWithText
                placeholder="Բաղրամյան 26, Երևան"
                Icon={LocationIcon}
                type='text'
                onChange={onChangeAddress}
                value={address}
                text="Առաքման հասցե"
            />
            <ErrorMessage>{errors.shippingAddress}</ErrorMessage>
            <PhoneInput
                value={phone}
                onChange={onChangePhone}
            />
            <ErrorMessage>{errors.phoneError}</ErrorMessage>
            <InputFieldWithText
                placeholder="example@yahoo.com"
                Icon={MailIcon}
                type='email'
                onChange={onChangeEmail}
                value={email}
                text="Էլ․հասցե"
            />
            <ErrorMessage>{errors.emailError}</ErrorMessage>
        </OrderDetailsContainer>
    );
}

export default OrderDetailsLeftBox;