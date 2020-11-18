import { IProductDataItem } from 'data-mockup/product-data.mockup';
import { IQuizData } from 'data-mockup/quiz-data.mockup';
import { ActionTypes } from './actionTypes';

export enum DeviceTypes {
    mobile = 'mobile',
    tablet = 'tablet',
    desktop = 'desktop',
}

export interface IAction {
    type: ActionTypes;
    payload?: any;
}

export interface IUser {
    id: string | number;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    phoneNumber: string | null;
}
export interface IOrderDetails {
    name: string;
    address: string;
    phone: string;
    email: string;
    giftReceiverName: string;
    selection: number | null;
}

export interface State {
    device: DeviceTypes;
    quizData: IQuizData[];
    user: IUser | null;
    orderDetails: IOrderDetails;
    orders: IProductDataItem[];
    isCartOpen: boolean;
}