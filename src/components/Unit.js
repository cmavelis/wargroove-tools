import React from 'react';

import soldier from '../assets/images/cherrystone/soldier.png';
import './unit.scss'

const Unit = () => {
    return (
        <div className='unit__container'>
            <div className='unit__image-container'>
                <img className='unit__image' src={soldier} alt='soldier' />
            </div>
            <span className='unit__detail unit__detail--upper'>2</span>
            <span className='unit__detail unit__detail--lower'>77</span>
        </div>
    )
};

export default Unit;
