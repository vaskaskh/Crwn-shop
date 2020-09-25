import React from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Header from './../components/Header/Header';
import Shop from './shop/shop';
import Auth from './SignIn&SignUp/Auth';
import firebase from './../components/firebase/firebase';
import {connect} from 'react-redux';
import {setUser, clearUser} from './../components/Redux/actions/userAction'
import Contact from './contact/contact';
import {CubeGrid} from 'styled-loaders-react';
import CheckOut from './checkout/checkout';
import Hats from './Hats/Hats';
import Women from './Women/Women';
import Jackets from './Jackets/Jackets';
import Sneakers from './Sneakers/Sneakers';
import Men from './Men/Men';





class App extends React.Component {

    state={
        loading: true
    }

componentDidMount(){
    

setTimeout(()=>{
    this.setState({
        loading:false
    })
    },2000)

    firebase.auth().onAuthStateChanged(user=>{
        if(user){
            this.props.setUser(user);
        }
        else{
            clearUser();
        }
    })



}


    render() {
        
        const {currentUser} = this.props;
        return  this.state.loading ? (
            <div className='cubeGrid'>
                <CubeGrid color="#0762FF" 
                
                />
            </div>
        ):(
            <div className='App'>
                <Header/>
                <Switch>
                    <Route  exact    path='/'  component={Homepage}/>

                    <Route          path='/checkout' component={CheckOut}/>

                    <Route         path='/shop'  component={Shop}/>

                    <Route        path='/contact'  component={Contact}/>

                    <Route       path='/signin' render={()=> currentUser ? (<Redirect to='/'/>) : (<Auth/>)}/>

                    <Route     path="/hats" component={Hats}/>

                    <Route     path="/men" component={Men}/>

                    <Route     path="/women" component={Women}/>

                    <Route     path="/jackets" component={Jackets}/>

                    <Route     path="/sneakers" component={Sneakers}/>

                </Switch>
            </div>
        )

    }
}

const mapStateToProps = state=>{
    return{
        currentUser: state.user.currentUser
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        setUser: user=>dispatch(setUser(user)),
        clearUSer: ()=>dispatch(clearUser())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
