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
    id: number;
    name: string;
    email: string;
}
export interface IOrderDetails {
    name: string;
    address: string;
    phone: string;
    email: string;
    getter: string;
    selection: number | null;
}

export interface State {
    device: DeviceTypes;
    quizData: IQuizData[];
    user: IUser | null;
    orderDetails: IOrderDetails;
    orders: IProductDataItem[];
}