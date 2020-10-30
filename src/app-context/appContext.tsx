import { createContext } from 'react';

import { quizData } from "data-mockup/quiz-data.mockup";
import { DeviceTypes } from './contextTypes';

export const initialState = {
    device: DeviceTypes.desktop,
    quizData,
}

export const AppContext = createContext<any>(initialState);