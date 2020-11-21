import {
    CLEAR_ALL,
    CLEAR_DISPLAY,
    TOGGLE_SIGN,
    PERCENT_INPUT,
    DECIMAL_INPUT,
    DIGIT_INPUT,
    DO_MATH
} from './types';

const CalcOperations = {
    '+' : (previousValue, nextValue) => previousValue + nextValue,
    '-' : (previousValue, nextValue) => previousValue - nextValue,
    '*' : (previousValue, nextValue) => previousValue * nextValue,
    '/' : (previousValue, nextValue) => previousValue / nextValue,
    '=' : (previousValue, nextValue) => nextValue
};

export const clearAll = () => {
    return (
        type: CLEAR_ALL,
    );
};

export const clearDisplay = () => {
    return {
        type: CLEAR_DISPLAY,
    }
};

export const toggleSign = displayValue => {
    let oppositeValue = parseFloat(displayValue) * -1;
    oppositeValue = String(oppositeValue);
    return {
        type: TOGGLE_SIGN,
        payload: oppositeValue
    }
};

export const percentInput = ( value, displayValue, operator ) => {
    const currentValue = parseFloat(displayValue);
    let updatedValue;
    if (currentValue === 0) {
        updatedValue = 0;
    }
    if (operator !== '+' && operator !== '-') {
        updatedValue = parseFloat(displayValue) / 100;
    } else {
        updatedValue = (displayValue / 100) * value;
    }
    updatedValue = String(updatedValue);
    return {
        type: PERCENT_INPUT,
        payload : updatedValue
    };
};

export const decimalInput = ( value, displayValue, waitingForNumber ) => {
    const data = {
        displayValue : displayValue,
        waitingForNumber: waitingForNumber
    };
    //check first to see if value is not equal to display value as in this case value starts at null. If they aren't equal
    //we check to see if a decimal already exists. if it doesn't we are then adding in a decimal
    if (value !== parseFloat(displayValue)  && displayValue.indexOf('.') === -1) {
        data.displayValue = displayValue + '.';
        data.waitingForNumber = false;
        //if value is equal to the display value and we are waiting for the second number to be entered, we need to start it off with
        //a "0." because the decimal was clicked before a number.
    } else if ((value === parseFloat(displayValue) && waitingForNumber)) {
        data.displayValue = 0;
        data.waitingForNumber = false;
    }
    return {
        type: DECIMAL_INPUT,
        payload: data
    }
};

export const digitInput = (number, displayValue, waitingForNumber) => {
    let data = {
        displayValue: displayValue
        waitingForNumber: waitingForNumber
    };
    if(waitingForNumber) {
        data = {
            displayValue: String(number),
            waitingForNumber: false
        };
    } else {
        data = {
            displayValue: displayValue === '0' ? String(number) : displayValue + number
        }
    }
    return {
        type: DIGIT_INPUT,
        payload: data
    }
};

export const doMath = (nextOperator, value, displayValue, operator, waitingForNumber) => {
    let data = {
        value: value,
        displayValue: displayValue,
        operator: operator,
        waitingForNumber: waitingForNumber
    };
    const inputValue = parseFloat(displayValue);
    if (value == null) {
        data = {
            value: inputValue
        }
    } else if (operator && !waitingForNumber) {
        const currentValue = value || 0;
        const newValue = CalcOperations[operator](currentValue, inputValue);
        data = {
            value: newValue,
            displayValue: String(newValue)
        }
    }
    data = {
        waitingForNumber: true,
        operator: nextOperator
    };
    return {
        type: DO_MATH,
        payload: data
    }
};