import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user]=useAuthState(auth);
    const handleSignOut= ()=>{
        signOut(auth);
    }
    return (
        <div>
             <Link to={'/home'} > Home</Link>
             {user ? <button onClick={handleSignOut}>{`LogOut${user.displayName}`} </button> : <Link to={'/login'}>Login</Link>}
        </div>
    );
};

export default Header;