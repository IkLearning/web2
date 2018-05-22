import React from 'react'
import PostListPlaceHolder from './PostListPlaceHolder'
import PostListItem from './PostListItem'
import axios from 'axios'

class PostList extends React.Component{

    state = {
        items: [],
        isLoaded: false
    }

    componentDidMount = ()=>{
        axios.get('http://localhost:3001/api/v1/products')
            .then(res =>{
                if(res.status === 200 || res.statusText === 'OK')
                    this.setState({
                        items: res.data.items,
                        isLoaded: true
                    })
            })
            .catch(err => this.setState({isLoaded: false}))
    }

    getByCat = (id) => {
        axios.get(`http://localhost:3001/api/v1/products/category/5b0351cb2b8ccf1d04dd82c6`)
            .then(res =>{
                if(res.status === 200 || res.statusText === 'OK')
                    this.setState({
                        items: res.data.items,
                        isLoaded: true
                    })
                console.log(res.data.items)
            })
            .catch(err => this.setState({isLoaded: false}))
    }

    renderItem = (i) => {
        let items = [...this.state.items]
        return <PostListItem key={items[i]._id} value={items[i]} getByCat={this.getByCat}/>
    }


    render(){

        let { isLoaded, items } = {...this.state}

        return(
            <div className="posts">
                <div className="posts__head">
                    <div className="posts__topic">Product</div>
                    <div className="posts__category">Category</div>
                    <div className="posts__views">Cart</div>
                    <div className="posts__views">Views</div>
                    <div className="posts__views">Price</div>
                    <div className="posts__activity">Activity</div>
                </div>
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {!isLoaded && <PostListPlaceHolder style={{paddinngTop: 10}} /> }
                {isLoaded &&
                    items.map((item, i) =>this.renderItem(i))
                }
            </div>
        )
    }
}

export default PostList