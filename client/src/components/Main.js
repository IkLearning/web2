import React from 'react'
import Navigation from './Navigation'
import PostContainer from './post/PostContainer'

class Main extends React.Component{

    render(){

        return(
            <main>
                <div className="container">
                    <Navigation />
                    <PostContainer />
                </div>
            </main>
        )
    }
}

export default Main