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

export interface State {
    device: DeviceTypes;
    quizData: IQuizData[];
}