import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import './authentication-page.styles.scss';
import { SignUp } from '../../sign-up/sign-up.component';

const AuthenticationPage = () =>(
    <section className="auth-section">
        
            <SignIn />
            <SignUp />
        
    </section>  
)

export default AuthenticationPage;