import React from 'react'
import PostContainer from './post/PostContainer'
import AuthContainer from './auth/AuthContainer'
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component{

    render(){

        return(
            <main>
                <div className="container">
                    <Switch>
                        <Route path='/auth' component={AuthContainer} />
                        <Route path='/:category?/:slug?' component={PostContainer} />
                    </Switch>
                </div>
            </main>
        )
    }
}

export default Main