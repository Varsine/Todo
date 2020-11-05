import { IQuizData } from "data-mockup/quiz-data.mockup";
import { ActionTypes } from "./actionTypes";
import { IAction, State } from "./contextTypes";
import { quizData as quizDataMockup } from 'data-mockup/quiz-data.mockup';

export default (state: State, action: IAction): State => {
    switch (action.type) {
        case ActionTypes.SELECT_QUIZ:
            const stateCopy = [...state.quizData];
            const quiz = stateCopy.find((quiz: IQuizData) => quiz.id === action.payload.quizId);
            if (quiz) {
                quiz.selection = action.payload.selection;
                return { ...state, quizData: stateCopy };
            }
            return state;

        case ActionTypes.RESET_QUIZ_SELECTION:
            return { ...state, quizData: quizDataMockup }

        case ActionTypes.SET_USER:
            return {...state, user: action.payload.user};

        case ActionTypes.SET_DEVICE_TYPE:
            return { ...state, device: action.payload }
            
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}