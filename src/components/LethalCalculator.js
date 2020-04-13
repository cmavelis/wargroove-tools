import React from 'react';

import Unit from './Unit';

import './lethalCalculator.scss';

const LethalCalculator = () => (
    <div className="lethal-calculator__container">
        <div>target</div>
        <div className="lethal-calculator__map-container">
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
            <Unit/>
        </div>
        <div>overview</div>
    </div>
);

export default LethalCalculator;
