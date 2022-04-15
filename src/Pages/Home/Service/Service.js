import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className='mx-auto'>
            <div className='service mx-auto'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p className='service-description'><small>{description}</small></p>
                <button className='bg-primary text-white py-2 px-3 rounded' onClick={ () => navigateToServiceDetail(id)}>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;