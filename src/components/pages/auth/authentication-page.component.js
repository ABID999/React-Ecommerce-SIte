import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import './authentication-page.styles.scss';

const AuthenticationPage = () =>(
    <section className="auth-section">
        <div className="sign-in-div">
            <SignIn />
        </div>
    </section>  
)

export default AuthenticationPage;