import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Switch, Route } from 'react-router-dom'

class AuthContainer extends React.Component{


    render(){

        return(
            <Switch>
                <Route path='/auth/login' component={Login}/>
                <Route path='/auth/signup' component={Signup}/>
            </Switch>
        )
    }

}

export default AuthContainer