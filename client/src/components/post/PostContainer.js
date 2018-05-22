import React from 'react'
import PostSingle from './PostSingle'
import PostCreate from './PostCreate'
import PostList from './PostList'
import { Switch, Route} from 'react-router-dom'
import history from '../history/history'


class PostContainer extends React.Component{

    render(){

        return ( 
            <Switch history={history}>
                <Route exact path='/' component={PostList} />
                <Route path='/:category/:slug' component={PostSingle} />
                <Route path='/new-product' component={PostCreate} />
            </Switch>
        )
    }
}

export default PostContainer