import React from 'react';
import './SignIn.css';
import firebase from './../../components/firebase/firebase';


class SignIn extends React.Component{
    state={
        email:'',
        password:'',
        errors:[],
    }



//handleSubmit

handleSubmit=event=>{
    event.preventDefault();

    if(this.isFormValid(this.state)){
        this.setState({errors:[]});


        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(signedInUser=>{
                console.log(signedInUser);
            }).catch(err=>{
                console.log(err);
                this.setState({
                    errors: this.state.errors.concat(err)
                })
            })
    }
}

//is Form Valid
    isFormValid=({email, password})=>{
        return email && password
    }
    
// handleChange
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }





    render(){
        const { email, password} = this.state;
        return(
            <div className='SIGNIn'>
                <h2 className='signIn--text'>Sign In With Email And Password</h2>
                <form className='signIn--form' onSubmit={this.handleSubmit}>
                   
                    <label className='signIn--lbl'>Email</label>
                     <input
                        type='email'
                        value={email}
                        name='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        className='input--option'
                    />
                    
                    <label className='signIn--lbl'>Password</label>
                     <input
                        type='password'
                        value={password}
                        name='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                        className='input--option'
                    />
<div>
            <button className='signIn--btn'>Sign In</button>
</div>
                </form>
            </div>
        )
    }
}


export default SignIn;