import {
    CLEAR_ALL,
    CLEAR_DISPLAY,
    TOGGLE_SIGN,
    PERCENT_INPUT,
    DECIMAL_INPUT,
    DIGIT_INPUT,
    DO_MATH
} from '../actions/types';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForNumber: false
};

const calculatorReducer = (
    state = {
        value: INITIAL_STATE.value,
        displayValue: INITIAL_STATE.displayValue,
        operator: INITIAL_STATE.operator,
        waitingForNumber: INITIAL_STATE.waitingForNumber
    }, action) => {

    switch (action.type) {
        case CLEAR_ALL:
            return {...state, value: null, displayValue: '0', operator: null, waitingForNumber: false};
        case CLEAR_DISPLAY:
            return  {...state, displayValue: '0'};
        case TOGGLE_SIGN:
            return  {...state, displayValue: action.payload};
        case PERCENT_INPUT:
            return  {...state, displayValue: action.payload};
        case DECIMAL_INPUT:
            return  {
                ...state,
                displayValue: action.payload.displayValue,
                waitingForNumber: action.payload.waitingForNumber
            };
        case DIGIT_INPUT:
            return  {
                ...state,
                displayValue: action.payload.displayValue,
                waitingForNumber: action.payload.waitingForNumber
            };
        case DO_MATH:
            return  {
                ...state,
                value: action.payload.value,
                displayValue: action.payload.displayValue,
                operator: action.payload.operator,
                waitingForNumber: action.payload.waitingForNumber
            };
        default:
            return state;
    }
};

export default combineReducers({
    data : calculatorReducer
});