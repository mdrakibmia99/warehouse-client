import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let catchError;
    const navigate=useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    if(loading){
        return <Loading></Loading>
    }
    if(error){
        catchError = <p className='text-danger'>Error: {error?.message} </p>
    }
    if(user){
        navigate(from,{replace:true})
    }
    return (
        <div>
              <button onClick={()=>signInWithGoogle()}>sign in with google</button>
              {catchError}
        </div>
    );
};

export default SocialLogin;