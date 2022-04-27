import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorElement;
    let loadingText;

    if (error || error1 || error2) {
        errorElement =  <p className='text-center text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
    }

    if (loading || loading1 || loading2) {
        loadingText = <p className='text-center text-primary'>Loading...</p>;
    }

    if (user || user1 || user2) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex  justify-content-center  align-items-center or-text'>
                <div className='straight-line'></div>
                    <p className='mx-3 mt-2'>or</p>
                <div className='straight-line'></div>
            </div>
            {loadingText}
            {errorElement}
            <div>
                <button className='google-sign-in-btn'
                onClick={ () => signInWithGoogle() }>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={25} src={google} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Google Sign In</h6>
                    </div>
                </button>

                <button className='google-sign-in-btn'
                onClick={ () => signInWithGithub() }>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={25} src={github} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Github Sign In</h6>
                    </div>
                </button>

                <button className='google-sign-in-btn'
                onClick={ () => signInWithFacebook() }>
                    <div className='d-flex justify-content-center  align-items-center'>
                        <img height={30} src={facebook} alt="google-icon" />
                        <h6 className='ms-2 mt-2 text-uppercase text-secondary'>Facebook Sign In</h6>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;