import '../styles/styles.css';
import React from 'react';
import Calculator from '../layout/Calculator';

const app = () => {
    return(
        <div className="app">
            <h1 style={{textAlign: "center"}}>Calculator Using React and Redux</h1><br/>
            <Calculator/>
        </div>
    )
};

export default app;