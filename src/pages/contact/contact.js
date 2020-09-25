import React from 'react';
import './contact.scss';
import githubIcon from './../../components/img/githubIcon.png';
import instaIcon from '../../components/img/instaIcon.png';
import firebase from './../../components/firebase/firebase';



class Contact extends React.Component{

    state={
        email:'',
        name:'',
        message:'',
        messagesRef: firebase.database().ref('messages'),
        errors:[]
    }
 


handleChange=(event)=>{
    this.setState({
        [event.target.name]: event.target.value
    })
}


handleSubmit = event=>{
    event.preventDefault()
    const {messagesRef, email, message,name}= this.state;

    if(this.isFormValid(this.state)){
        messagesRef.child('message').push().set({
            name: name,
            email:email,
            message: message,
        })
        .then(err=>{
            console.error(err);
            this.setState({
                errors:this.state.errors.concat(err)
            })
            
        })
        alert('Form Submitted')

    }
    else {
        return alert("Form Is Empty")
    }
}

isFormValid = ({email, name, message})=>{
    return email && name && message
}



 render(){
    return(
        <div>
            
            <form className='form' onSubmit={this.handleSubmit}>
                <label className='form-contact-lbl'>Name *</label>
                <input
                    type='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    className='form-contact-input'
                    required
                />    
                

                <label className='form-contact-lbl'>Email *</label>
                <input
                    type='email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    className='form-contact-input'
                    required
                />   


                <label className='form-contact-lbl'>Message *</label>
                <textarea
                    type='text'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleChange}
                    className='form-contact-input'
                    required
                />   
            
            
            
            <button className='form-contact-btn'> Submit </button>
            
            </form>    



            <div className='links'>

                <a href="https://github.com/vaskaskh"  target="_blank"rel="noopener noreferrer"  >
                    <img  src={githubIcon}  alt='github-icon' className='links-contact-img' />
                </a>

                <a href="https://www.instagram.com/vaska_skhirtladze/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img  src={instaIcon}  alt='insta-icon' className='links-contact-img'/>
                </a>

                

            </div>

            <h2 className='contact-bottom-info' onClick={()=>alert('form Submitted')}>Copyright © 2020 Vaska Skhirtladze</h2>

        </div>
    )
 }
}
export default Contact;