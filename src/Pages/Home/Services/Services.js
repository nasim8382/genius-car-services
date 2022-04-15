import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        axios.get('services.json')
        .then(data => setServices(data.data));
    }, [])

    return (
        <div className='container'>
            <h1 className='text-center text-primary py-4'>Our Services</h1>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;