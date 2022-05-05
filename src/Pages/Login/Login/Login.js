
import axios from 'axios';
import { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword, user1, loading, error,] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [agree, setAgree] = useState(false);

  if (user1 || user) {

    navigate(from, { replace: true })
  }
  const handleLogin =async(event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    const {data}=await axios.post('https://desolate-ridge-35981.herokuapp.com/login',{email})
       localStorage.setItem('accessToken',data.token)
        navigate(from, { replace: true });
  }

  return (
      <div>
        <PageTitle title={'Login'}></PageTitle>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
          <h2>Please Login!</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Email address</label>
              <input type="email" name='email'required className="form-control
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
            <div className="form-group mb-6">
              <label className="form-label inline-block mb-2 text-gray-700">Password</label>
              <input type="password" name='password' required className="form-control block
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
                            placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms"
                className='form-check-input h-4 w-4  float-left mr-2 cursor-pointer'/>
                <label htmlFor="terms" className={`${agree? "text-black":"text-[red]"}`}>Remember me</label>
              </div>
              <Link to={'/reset'}
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                password?</Link>
            </div>

            <p>{error?.message}</p>
            {loading && <Loading></Loading>}
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
              Sign in
            </button>
            <p className="text-gray-800 mt-6 text-center">Not a member? <Link to={'/register'}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
            </p>
        <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
  );
};

export default Login;