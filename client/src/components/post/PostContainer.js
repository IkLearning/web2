import React from 'react'
import PostSingle from './PostSingle'
import PostCreate from './PostCreate'
import PostList from './PostList'
import { Switch, Route} from 'react-router-dom'

class PostContainer extends React.Component{

    render(){

        return ( 
            <Switch>
                <Route exact path='/' component={PostList} />
                <Route path='/:category/:slug' component={PostSingle} />
                <Route path='/new-product' component={PostCreate} />
            </Switch>
        )
    }
}

export default PostContainer