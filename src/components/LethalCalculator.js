import React, {useState} from 'react';

import Unit from './Unit';
import './lethalCalculator.scss';

import {fullData} from '../assets/dummyData';

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
                    <input type='number' max="100" min="1" value={state} onChange={e => setState(e.target.value)}/>
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
            <Unit slot={'target'} hp={state} />
            <Unit/>
            <div/>
            <div/>
            <Unit slot={'indirect'}/>
        </div>
        <div>
            <h3>overview</h3>
            <table>
                <tr>
                    <th/>
                    <th><span>dmg </span></th>
                    <th><span>low </span></th>
                    <th><span>avg </span></th>
                    <th><span>high </span></th>
                </tr>
            {fullData.outcomes.average.map((a, i) =>
                <tr>
                    <td><Unit/></td>
                    <td><span>10 </span></td>
                    <td><span>{fullData.outcomes.low[i]} </span></td>
                    <td><span>{fullData.outcomes.average[i]} </span></td>
                    <td><span>{fullData.outcomes.high[i]} </span></td>
                </tr>
            )
            }
            </table>
        </div>
    </div>
)};

export default LethalCalculator;
