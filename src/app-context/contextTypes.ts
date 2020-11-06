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

export interface State {
    device: DeviceTypes;
    quizData: IQuizData[];
    user: IUser | null;
}