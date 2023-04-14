import CmButton from '../CmButton/CmButton';
import React from 'react';
import './CallToAction.scss';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
    const navigate = useNavigate();
    return (
        <div className='CallToAction'>
            <div className='CallToAction__content'>
                <h2 className='CallToAction__title'>Open your personal watchlist</h2>
                <CmButton addClasses='CallToAction__button' text='Login' clickHandler={() => { navigate('/login') }} />
            </div>
        </div>
    )
}

export default CallToAction