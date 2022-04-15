import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container'>
            <h2 className="text-primary text-center mt-5 mb-3">Please Register</h2>
            <div className='register-form'>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input className='input-field' type="text" name="name" placeholder='Your Name'/>

                <label htmlFor="email">Email</label>
                <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                <label htmlFor="email">Password</label>
                <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                <input className='submit-input' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an Account?
                <Link to='/login' className="text-danger text-decoration-none">Login</Link>
            </p>
            </div>
        </div>
    );
};

export default Register;