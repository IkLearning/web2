import React from 'react'
import PostContainer from './post/PostContainer'

class Main extends React.Component{

    render(){

        return(
            <main>
                <div className="container">
                    <PostContainer />
                </div>
            </main>
        )
    }
}

export default Main