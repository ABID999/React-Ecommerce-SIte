import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (e) => {
        const {value, name} = e.target;

        this.setState({[name] : value});

    }

    render(){
        return(
            <div className="sign-in">
                <h2>Already have an account</h2>
                <p>SIGN IN</p>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email}  onChange={this.handleChange} label="Email"/>
                    <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password"/>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>{' '}Sign in with Google{' '}</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;