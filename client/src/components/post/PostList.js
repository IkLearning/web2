import React from 'react'
import PostListPlaceHolder from './PostListPlaceHolder'
import PostListItem from './PostListItem'
import axios from 'axios'

class PostList extends React.Component{

    state = {
        posts: [],
        isLoaded: false
    }

    componentWillMount = ()=>{
        axios.get('http://localhost:3001/products')
            .then(res =>{
                if(res.status === 200 || res.statusText === 'OK')
                    this.setState({
                        posts: res.data,
                        isLoaded: true
                    })
            })
            .catch(err => console.log(err))
    }

    renderItem = (i) => {
        let posts = [...this.state.posts]
        return <PostListItem key={posts[i].id} value={posts[i]} />
    }


    render(){

        let { isLoaded, posts } = {...this.state}

        return(
            <div className="posts">
                <div className="posts__head">
                    <div className="posts__topic">Topic</div>
                    <div className="posts__category">Category</div>
                    <div className="posts__users">Users</div>
                    <div className="posts__replies">Replies</div>
                    <div className="posts__views">Views</div>
                    <div className="posts__activity">Activity</div>
                </div>
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}}/>}
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}}/>}
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}}/>}
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}}/>}
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}}/>}
                {isLoaded &&
                    posts.map((item, i) =>this.renderItem(i))
                }
            </div>
        )
    }
}

export default PostList