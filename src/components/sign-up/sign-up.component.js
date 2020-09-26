import React from 'react';

import FormInput from '../form-input/form-input.component';

import {auth , createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


export class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target ;
        this.setState({[name] : value});
    }

    handleSubmit = async event =>{
        event.preventDefault();
        
        const {displayName, email, password, confirmPassword} = this.state;

        if( password !== confirmPassword){
            alert("Passwords don't match");
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })  
        }catch(error){
            console.log('Cant register user', error);
        }

    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h1 className="title">Don't have an account</h1>
                <p>Sign Up</p>
                <form className="sign-up-from" onSubmit={this.handleSubmit}>

                    <FormInput name ="displayName" type="text" onChange={this.handleChange} value={displayName} label="Name" required />
                    <FormInput name ="email" type="email" onChange={this.handleChange} value={email} label="Email" required />
                    <FormInput name ="password" type="password" onChange={this.handleChange} value={password} label="Password" required />
                    <FormInput name ="confirmPassword" type="password" onChange={this.handleChange} value={confirmPassword} label="Confirm Password" required /> 
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
} 