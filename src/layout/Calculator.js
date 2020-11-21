import '../styles/calculator.css';
import React from 'react';
import Screen from './screen/Screen';
import Keypad from './keypad/Keypad';


class Calculator extends React.Component {

    //using component did update to fix the display value if the number on screen gets to be to large.
    //componentDidUpdate is perfect for this as it constantly keeps track of state.
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.displayValue !== this.state.displayValue) {
    //         let { displayValue } = this.state;
    //         displayValue = String(displayValue);
    //         //makes sure that if infinity is displayed that more digits don't appear
    //         if (displayValue.indexOf('Infinity') !== -1) {
    //             displayValue = 'Infinity';
    //         }
    //         if (displayValue.length > 10) {
    //             displayValue = parseFloat(displayValue).toPrecision(10);
    //         }
    //         this.setState({
    //             displayValue
    //         })
    //     }
    // }

    render() {
        return (
            <main className="calculator">
                <Screen />
                <Keypad />
            </main>
        );
    }
}

export default Calculator;