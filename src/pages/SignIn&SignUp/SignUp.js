import React from 'react';
import './SignUp.css';
import firebase from './../../components/firebase/firebase';


class SignUp extends React.Component{
    state={
        username:'',
        email:'',
        password:'',
        passwordConfirmation:'',
        errors:[],
        usersRef: firebase.database().ref('users')
    }



//handleSubmit

handleSubmit=event=>{
    event.preventDefault();


 if(this.isFormValid()){
     this.setState({errors:[]});


    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((createdUser)=>{
            console.log('USER SUCCESSFULLY CREATED', createdUser);
            createdUser.user.updateProfile({

                displayName: this.state.username,
                email: this.state.email
            
            })
            .then(()=>{
                this.saveUser(createdUser).then(()=>{
                    alert('User saved');
                })
            }).catch(err=>{
                console.log(err);
                this.setState({errors: this.state.errors.concat(err)})
            })
        }).catch((err)=>{
            console.error(err);
            this.setState({errors: this.state.errors.concat(err)})
        })
}
}



//FORM VALIDATION FOR HANDLESUBMIT

isFormValid(){
    let error;
    let errors=[];

    if(!this.isPasswordValid(this.state)){
        error={message: 'Password is invalid'};
        this.setState({errors: errors.concat(error)});
        
        return false; 
    }else
        if(this.isFormEmpty(this.state)){
        error={message: 'Fill in all fields'};
        this.setState({errors: errors.concat(error)});

        return false
    }else
        return true

}


//Form Empty

isFormEmpty ({username, passwordConfirmation, password, email}){
    return !username.length || !password.length || !passwordConfirmation.length || !email.length
}

//is Password Valid

isPasswordValid = ({password, passwordConfirmation})=>{
    if(password.length < 6 || passwordConfirmation.length < 6 ){
        return false
    }else if (password !== passwordConfirmation){
        return false
    }else {
        return true;
    }
}

//Save User
    saveUser = createdUser=>{
        return this.state.usersRef.child(createdUser.user.uid).set({
            name:createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
    }




// handleChange
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }




//error messages for users 
displayErrors = errors =>errors.map((error, i )=> <p key={i}>{error}</p>)


    render(){
        const {username, email, password, passwordConfirmation} = this.state;
        return(
            <div className='SIGNUP'>
                <h2 className='signUp--text'>Create Account With Personal Information</h2>
                <form className='signUp--form' onSubmit={this.handleSubmit}>
                    <label className='signUp--lbl'>Username</label>
                    
                    <input
                        type='text'
                        value={username}
                        name='username'
                        placeholder='Username'
                        onChange={this.handleChange}
                        className='input--option'
                    />
                    <label className='signUp--lbl'>Email</label>
                     <input
                        type='email'
                        value={email}
                        name='email'
                        placeholder='Email'
                        onChange={this.handleChange}
                        className='input--option'
                    />
                    
                    <label className='signUp--lbl'>Password</label>
                     <input
                        type='password'
                        value={password}
                        name='password'
                        placeholder='Password'
                        onChange={this.handleChange}
                        className='input--option'
                    />

                    <label className='signUp--lbl'>Confirm Password</label>
                     <input
                        type='password'
                        value={passwordConfirmation}
                        name='passwordConfirmation'
                        placeholder='Password'
                        onChange={this.handleChange}
                        className='input--option'
                    />



            <button className='signUp--btn'>Sign Up</button>

                </form>
            </div>
        )
    }
}


export default SignUp;