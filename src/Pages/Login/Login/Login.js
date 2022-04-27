import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation  } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    let loadingText;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    if (loading) {
        loadingText = <p className='text-center text-primary'>Loading...</p>;
    }

    if (error) {
        errorElement =  <p className='text-center text-danger mt-2'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="container mx-auto login-section">
            <h2 className="text-primary text-center mt-3">Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>

                <Button className="px-5 text-uppercase d-block mx-auto my-3" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {loadingText}
            {errorElement}
            <p className="mt-1 text-center">New to Genius Car?
                <span onClick={navigateRegister} className="text-primary register"> Please Register</span>

                {/* <Link to='/register' className="text-danger text-decoration-none"> Please Register</Link> */}
            </p>
            <p className="mt-1 text-center">Forget Password?
                <span onClick={resetPassword} className="text-primary register"> Reset Password</span>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
