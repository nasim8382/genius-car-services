import React from 'react';
import sleeping from '../../../../images/sleeping.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='text-center text-primary my-5'>Mechanic is Sleeping Now!!!!</h1>
            <div className='row justify-content-center'>
                <img className='w-75' src={sleeping} alt="sleeping-mechanic" />
            </div>
        </div>
    );
};

export default NotFound;