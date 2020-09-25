import React from 'react';
import './Auth.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Auth =()=>(
    
        <div className='Auth--Homepage'>
            <SignIn/>
            <SignUp/>
        </div>
    
)


export default Auth;