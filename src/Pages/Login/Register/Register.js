import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const [ 
        createUserWithEmailAndPassword, 
        user 
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name});
        alert('Updated profile');
        navigate('/home');
    }
    

    return (
        <div className='container'>
            <h2 className="text-primary text-center mt-3">Please Register</h2>
            <div className='register-form'>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input className='input-field' type="text" name="name" placeholder='Your Name'/>

                <label htmlFor="email">Email</label>
                <input className='input-field' type="email" name="email" placeholder='Email Address' required/>

                <label htmlFor="email">Password</label>
                <input className='input-field' type="password" name="password" placeholder='Your Password' required/>

                <input onClick={ () =>  setAgree(!agree) } type="checkbox" name="terms" />
                <label className={`ms-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car terms and Conditions</label>

                <input disabled={!agree} className='btn btn-primary text-white px-5 mx-auto mt-2 rounded text-uppercase' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an Account?
                <Link to='/login' className="text-primary text-decoration-none"> Login</Link>
            </p>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;