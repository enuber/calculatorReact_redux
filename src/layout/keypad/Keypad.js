import '../../styles/keypad.css';
import React from 'react';
import KeypadRow from './KeypadRow';
import Button from '../../components/Button';
import { connect } from 'react-redux';
import { clearAll, clearDisplay, toggleSign, percentInput, decimalInput, digitInput, doMath } from '../../actions';

const keypad = (props) => {
    const { value, displayValue, operator, waitingForNumber } = props;
    const checkClearMethod = displayValue === '0';
    const clearText = checkClearMethod ? 'CE' : 'C';

    return(
        <section className="keypad">
            <KeypadRow>
                <Button onButtonPress={() => checkClearMethod ? props.clearAll() : props.clearDisplay()}>{clearText}</Button>
                <Button onButtonPress={() => props.toggleSign(displayValue)}>±</Button>
                <Button onButtonPress={() => props.percentInput(value, displayValue, operator)}>%</Button>
                <Button type="Orange" onButtonPress={() => props.doMath('/', value, displayValue, operator, waitingForNumber)}>÷</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => props.digitInput(7, displayValue, waitingForNumber)}>7</Button>
                <Button onButtonPress={() => props.digitInput(8, displayValue, waitingForNumber)}>8</Button>
                <Button onButtonPress={() => props.digitInput(9, displayValue, waitingForNumber)}>9</Button>
                <Button type="Orange" onButtonPress={() => props.doMath('*', value, displayValue, operator, waitingForNumber)}>x</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => props.digitInput(4, displayValue, waitingForNumber)}>4</Button>
                <Button onButtonPress={() => props.digitInput(5, displayValue, waitingForNumber)}>5</Button>
                <Button onButtonPress={() => props.digitInput(6, displayValue, waitingForNumber)}>6</Button>
                <Button type="Orange" onButtonPress={() => props.doMath('-', value, displayValue, operator, waitingForNumber)}>—</Button>
            </KeypadRow>
            <KeypadRow>
                <Button onButtonPress={() => props.digitInput(1, displayValue, waitingForNumber)}>1</Button>
                <Button onButtonPress={() => props.digitInput(2, displayValue, waitingForNumber)}>2</Button>
                <Button onButtonPress={() => props.digitInput(3, displayValue, waitingForNumber)}>3</Button>
                <Button type="Orange" onButtonPress={() => props.doMath('+', value, displayValue, operator, waitingForNumber)}>+</Button>
            </KeypadRow>
            <KeypadRow>
                <Button type="Large" onButtonPress={() => props.digitInput(0, displayValue, waitingForNumber)}>0</Button>
                <Button onButtonPress={() => props.decimalInput(value, displayValue, waitingForNumber)}>.</Button>
                <Button type="Orange" onButtonPress={() => props.doMath('=', value, displayValue, operator, waitingForNumber)}>=</Button>
            </KeypadRow>
        </section>
    )
};

const mapStateToProps = state => {
    return {
        value: state.data.value,
        displayValue: state.data.displayValue,
        operator: state.data.operator,
        waitingForNumber: state.data.waitingForNumber
    }
};

export default connect(mapStateToProps, {
        clearAll,
        clearDisplay,
        toggleSign,
        percentInput,
        decimalInput,
        digitInput,
        doMath
    })(keypad);