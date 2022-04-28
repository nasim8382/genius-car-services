import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} =  useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:5000/service/${serviceId}`)
            .then(data => setService(data.data));
    }, []);

    return (
        <div className='text-center my-5'>
            <h2>This is service detail: {service.name}</h2>
            <div>
                <Link to='/checkout'>
                    <button className='btn btn-primary mt-4'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;