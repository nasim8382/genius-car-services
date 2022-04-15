import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} =  useParams();

    return (
        <div className='text-center my-5'>
            <h2>This is service detail: {serviceId}</h2>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-primary mt-4'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;