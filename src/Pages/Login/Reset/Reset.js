
import React from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate =useNavigate();
    const [user]=useAuthState(auth);
    if(user){
        navigate('/home')
    }
    const handleResetPassword =async event =>{
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
       await sendPasswordResetEmail(email);
       toast('Please check you email.');
       event.target.reset();

    }
    return (
        <div>
             <h2>Reset Your Password</h2>
             <form action="" onSubmit={handleResetPassword}>
             <input type="email" name='email' required />
             <input type="submit" value="Reset Password" />
             </form>
        </div>
    );
};

export default Reset;