import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
       console.log(user1,'github');
    let catchError;
    const navigate=useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    if(loading || loading1){
        return <Loading></Loading>
    }
    if(error || error1){
        catchError = <p>Error: {error?.message} {error1?.message} </p>
    }
    if(user || user1){
        navigate(from,{replace:true})
    }
    return (
        <div>
            <div className='flex content-center '>
            <hr className='w-2/4' />
             < p className='px-2 text-2xl'>X</p>
             <hr className='w-2/4'/>
            </div>
                <button className=" bg-red-500 py-2 hover:bg-red-400  w-full mb-3 text-white rounded"
                    type="submit" onClick={()=>signInWithGoogle()}><i className="fa fa-google" aria-hidden="true"></i> Sign in with google</button>

                <button className="bg-red-500 py-2 hover:bg-red-400  w-full  text-white rounded"
                    type="submit" onClick={()=>signInWithGithub()}><i className="fa fa-github" aria-hidden="true"></i> Sign in with github</button>
             
              {catchError}
        </div>
    );
};

export default SocialLogin;