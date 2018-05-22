import React from 'react'
import PostSingle from './PostSingle'
import PostCreate from './PostCreate'
import PostList from './PostList'
import { Switch, Route } from 'react-router-dom'


class PostContainer extends React.Component{

    render(){

        return (
            <Switch>
                <Route exact path='/' component={PostList} />
                <Route exact location={{pathname:'/:category/:slug'}} component={PostSingle} />
                <Route path='/new-thread' component={PostCreate} />
            </Switch>
        )
    }
}

export default PostContainer