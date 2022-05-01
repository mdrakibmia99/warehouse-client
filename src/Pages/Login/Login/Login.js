
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [user]=useAuthState(auth);
  const [signInWithEmailAndPassword, user1, loading, error,] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  if(user){
    navigate('/home');
  }

  if (user1) {

    navigate(from, { replace: true })
  }
  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className='w-50 mx-auto'>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <p>{error?.message}</p>
        {loading && <p>loading...</p>}
        <Button variant="primary" type="submit">LogIn</Button>
      </Form>
         <Link to={'/reset'} > Reset password</Link>
      <p><Link to="/register"> Registration</Link></p>
       
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;