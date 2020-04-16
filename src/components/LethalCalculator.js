import React, {useState} from 'react';

import Unit from './Unit';

import './lethalCalculator.scss';

const LethalCalculator = () => {
    const [state, setState] = useState(0);
    return (
    <div className="lethal-calculator__container">
        <div>
            <h3>target</h3>
            <fieldset>
                <button>CO</button>
                <button>HQ</button>
                <br/>
                <label>
                    HP
                    <input type='number' max="100" value={state} onChange={e => setState(e.target.value)}/>
                </label>
            </fieldset>
            <br/>
            <Unit slot={'target'} hp={state}/>
        </div>
        <div className="lethal-calculator__map-container">
            <div/>
            <Unit/>
            <div/>
            <Unit/>
            <Unit slot={'target'} />
            <Unit/>
            <div/>
            <div/>
            <Unit slot={'indirect'}/>
        </div>
        <div>overview
            <Unit small />
        </div>
    </div>
)};

export default LethalCalculator;
