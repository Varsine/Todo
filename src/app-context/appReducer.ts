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
            return { ...state, user: action.payload.user };

        case ActionTypes.SET_DEVICE_TYPE:
            return { ...state, device: action.payload }

        case ActionTypes.SET_ORDER_DETAILS:
            return { ...state, orderDetails: action.payload }

        case ActionTypes.TOGGLE_CART:
            return { ...state, isCartOpen: !state.isCartOpen };

        case ActionTypes.ADD_ORDER:
            const isAlreadyAdded = state.orders.find(el => el.id === action.payload.id);
            if (isAlreadyAdded) {
                return state;
            }
            return { ...state, orders: [...state.orders, { ...action.payload, count: 1 }] }

        case ActionTypes.CHANGE_ORDER_COUNT:
            const el = state.orders.find(el => el.id === action.payload.id);
            if (el) {
                if (el.count + action.payload.changeCount <= 0) {
                    return { ...state, orders: state.orders.filter(el => el.id !== action.payload.id) }
                }
                return {
                    ...state,
                    orders: state.orders.map(el => {
                        if (el.id === action.payload.id) {
                            return { ...el, count: el.count + action.payload.changeCount }
                        }
                        return el;
                    })
                };
            }
            return state;

        case ActionTypes.REMOVE_ORDER_ITEM:
            return { ...state, orders: state.orders.filter(el => el.id !== action.payload.id) }

        case ActionTypes.LOCK_SCROLL:
            return { ...state, lockScroll: !state.lockScroll }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}