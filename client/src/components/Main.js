import React from 'react'
import Navigation from './Navigation'
import PostList from './post/PostList'
import PostCreate from './post/PostCreate'

class Main extends React.Component{

    render(){

        return(
            <main>
                <div className="container">
                    <Navigation />
                    <PostList />
                    <PostCreate />
                </div>
            </main>
        )
    }
}

export default Main