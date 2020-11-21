import '../../styles/screen.css';
import React from 'react';
import ResultScreen from './ResultScreen';
import { connect } from 'react-redux';


const screen = ({ displayValue }) => {

    const checkDisplayValue = () => {
            let checkValue = String(displayValue);
            //makes sure that if infinity is displayed that more digits don't appear
            if (checkValue.indexOf('Infinity') !== -1) {
                checkValue = 'Infinity';
            }
            if (checkValue.length > 10) {
                checkValue = parseFloat(checkValue).toPrecision(10);
            }
            return(checkValue)
        };

    return(
    <section className="screen">
        <ResultScreen>{checkDisplayValue()}</ResultScreen>
    </section>
    )
};

const mapStateToProps = state => {
    return {
        displayValue: state.data.displayValue
    }
};

export default connect(mapStateToProps)(screen);