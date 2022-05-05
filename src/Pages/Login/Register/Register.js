import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import PageTitle from '../../Shared/PageTitle/PageTitle';


const Register = () => {
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);
    const [createUserWithEmailAndPassword, user1, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [agree, setAgree] = useState(false);
    const [updateProfile, updating,] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const handleRegistration = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const dpUrl=event.target.imgLink.value;
        if (password !== confirmPassword) {
            setError('Password Did not Match!!')
        } else if (password.length < 6) {
            setError('Password must be 6 or more!!')
        } else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name,photoURL:dpUrl });
            toast('Registration Successful');
            
        }
    }
    
    return (

        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
            <PageTitle title={'Register'}></PageTitle>
            <h2>Please Register!</h2>
            <form onSubmit={handleRegistration}>
                <div className="form-group mb-3">
                    <input type="text" name='name' required className="form-control
                          block
                          w-full
                          px-3
                          py-1
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
                        placeholder="Name"
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="email" name='email' required className="form-control
                            block
                            w-full
                            px-3
                            py-1
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
                <div className="form-group mb-3">
                    <input type="password" name='password' required className="form-control block
                          w-full
                          px-3
                          py-1
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
                        placeholder="Password"
                    />
                </div>
                <div className="form-group mb-3">
                    <input type="password" name='confirmPassword' required className="form-control block
                          w-full
                          px-3
                          py-1
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
                        placeholder="Confirm Password"
                    />
                </div>

                <div className="form-group mb-3">
                    <input type="text" name='imgLink' required className="form-control
                          block
                          w-full
                          px-3
                          py-1
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
                        placeholder="Add your profile image link"
                    />
                </div>

                <div className="flex justify-between items-center mb-3">
                    <div className="form-group form-check">
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" className='form-check-input h-4 w-4  float-left mr-2 cursor-pointer' />
                        <label htmlFor="terms" className={`${agree ? 'text-[black]' : 'text-[red]'}`}>Accept Terms and Conditions</label>
                    </div>
                </div>
                <button type="submit" disabled={!agree} className="

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
                    Registration
                </button>
                <p className="text-gray-800 mt-3 text-center">Already have a account? <Link to={'/login'}
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">LogIn</Link>
                </p>
                <p style={{ color: 'red' }}> {error}</p>
                {(loading || updating) ? <Loading></Loading> : ""}
                <SocialLogin></SocialLogin>
            </form>
        </div>











        // <div>
        //     <h2>this is register page </h2>
        //     <form onSubmit={handleRegistration}>
        //         <input type="text" name='name' placeholder='Enter your name' required />
        //         <input type="email" name="email" placeholder='Email' required />
        //         <input type="password" name="password" placeholder='Password' required />
        //         <input type="password" name="confirmPassword" placeholder='Confirm Password' required />
        //         <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        //         <label htmlFor="terms">Accept warehouse Terms and Conditions</label>
        //         {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept warehouse Terms and Conditions</label> */}
        //         <input type="submit" disabled={!agree} value="Registration" />
        //     </form>
        //     <p style={{ color: 'red' }}> {error}</p>
        //     <SocialLogin></SocialLogin>
        // </div>
    );
};

export default Register;