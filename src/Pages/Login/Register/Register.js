import React, { useState } from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [error,setError]=useState('');
    const [ createUserWithEmailAndPassword,user,loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating,] = useUpdateProfile(auth);
    const navigate =useNavigate();
    if(loading || updating ){
        return <Loading></Loading>
    }


    const handleRegistration =async event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password=event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(name,email,password,confirmPassword);
        
        if(password !== confirmPassword){
              setError('Password Did not Match!!')
        }else if(password.length <6 ){
            setError('Password must be 6 or more!!')
        }
       await createUserWithEmailAndPassword(email,password);
       await updateProfile({displayName:name});
       toast('Registration Successful')
       navigate('/home');
       
    }
    return (
        <div>
            <h2>this is register page </h2>
            <form  onSubmit={handleRegistration}>
                <input type="text" name='name' placeholder='Enter your name' required />
                <input type="email" name="email" placeholder='Email' required/>
                <input type="password" name="password" placeholder='Password'  required/>
                <input type="password" name="confirmPassword" placeholder='Confirm Password'  required/>
                <input type="submit" value="Registration" />
            </form>
            <p style={{color:'red'}}> {error}</p>
        </div>
    );
};

export default Register;