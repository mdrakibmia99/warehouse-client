import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth)
    const location = useLocation();

    const handleVerificationCode = async (event) => {
        await sendEmailVerification();
        toast("Check your Email!")
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId==='password' && !user.emailVerified) {
        return <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto text-center'>
        <h2 className='mb-2 text-red-600 text-xl'>Your Email not Verified</h2>
        <h3 className='mb-2 text-green-600'>Please verified your email</h3>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleVerificationCode}>Send Verification Email Again</button>
    </div>
    }

    return children;
};

export default RequireAuth;