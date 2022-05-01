import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';


const Register = () => {
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);
    const [createUserWithEmailAndPassword, user1, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating,] = useUpdateProfile(auth);
    const navigate = useNavigate();


    if (loading || updating) {
        return <Loading></Loading>
    }
    if (user) {
        console.log('register', user)
        navigate('/home');
    }

    const handleRegistration = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError('Password Did not Match!!')
        } else if (password.length < 6) {
            setError('Password must be 6 or more!!')
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast('Registration Successful')


    }
    return (
        <div>
            <h2>this is register page </h2>
            <form onSubmit={handleRegistration}>
                <input type="text" name='name' placeholder='Enter your name' required />
                <input type="email" name="email" placeholder='Email' required />
                <input type="password" name="password" placeholder='Password' required />
                <input type="password" name="confirmPassword" placeholder='Confirm Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept warehouse Terms and Conditions</label>
                <input type="submit" disabled={!agree} value="Registration" />
            </form>
            <p style={{ color: 'red' }}> {error}</p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;