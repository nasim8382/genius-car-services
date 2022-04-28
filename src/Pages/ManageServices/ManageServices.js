import axios from 'axios';
import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            axios.delete(`http://localhost:5000/service/${id}`)
                .then(res => {
                    console.log(res);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                });
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className="text-primary my-4">Manage your Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete (service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;