
import React from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    if (user) {
        navigate('/home')
    }
    const handleResetPassword = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        await sendPasswordResetEmail(email);
        toast('Please check you email.');
        event.target.reset();

    }
    return (
        <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto'>
            <h2>Reset Your Password</h2>
            <form action="" onSubmit={handleResetPassword}>
                <div className="form-group mb-6">
                    <input type="email" name='email' required className="form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Enter email"
                    />
                </div>
                <button type="submit"  className="
                            w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out">
                          Reset Password
                </button>
            </form>
        </div>
    );
};

export default Reset;