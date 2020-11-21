import '../../styles/screen.css';
import React from 'react';
import ResultScreen from './ResultScreen';
import { connect } from 'react-redux';


const screen = ({ displayValue }) => {
    return(
    <section className="screen">
        <ResultScreen>{displayValue}</ResultScreen>
    </section>
    )
};

const mapStateToProps = state => {
    return {
        displayValue: state.data.displayValue
    }
};

export default connect(mapStateToProps)(screen);