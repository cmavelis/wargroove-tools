import React from 'react';

import soldier from '../assets/images/cherrystone/soldier.png';
import archer from '../assets/images/cherrystone/archer.png';
import commander from '../assets/images/felheim/commander.png';

import './unit.scss'

import {unitData as dummyUnit, targetData, indirectData} from '../assets/dummyData'

const dataBySlot = {
    indirect: indirectData,
    target: targetData,
    direct: dummyUnit
};

const Unit = (props) => {
    props.small ? console.log('small') : console.log();
    let unitData;
    props.slot ? unitData = dataBySlot[props.slot] : unitData = dummyUnit;
    const {
        hitOrder,
        unitType,
        hp
    } = unitData;

    const unitImages = {
        soldier,
        commander,
        archer
    };

    return (
        <div className={`unit__container ${props.slot === 'target' ? 'unit--enemy' : ''}`}>
            <div className='unit__image-container'>
                <div className='unit__detail unit__corner-overlay'>
                    {hitOrder}
                </div>
                <img
                    className='unit__image'
                    src={unitImages[unitType]}
                    alt={unitType}
                />
            </div>
            {/*<span className='unit__detail unit__detail--upper'>{unitData.hitOrder}</span>*/}
            <span className='unit__detail unit__detail--lower'>HP: {props.hp}</span>
        </div>
    )
};

export default Unit;
