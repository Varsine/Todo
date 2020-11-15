import { createContext } from 'react';

import { quizData } from "data-mockup/quiz-data.mockup";
import { DeviceTypes } from './contextTypes';

const initialOrderData = {
    name: "",
    address: "",
    phone: "",
    email: "",
    getter: "",
    selection: 1
}

export const initialState = {
    device: DeviceTypes.desktop,
    quizData,
    user: null,
    orderDetails: initialOrderData,
    orders: [],
    isCartOpen: false,
}

export const AppContext = createContext<any>(initialState);