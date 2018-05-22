import React from 'react'
import axios from 'axios'
import TimeFromNow from '../time/TimeFromNow'

class PostSingle extends React.Component{

    state = {
        isLoaded: false,
        item: {}
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:3001/api/v1/products/${this.props.location.state.id}`)
            .then(res => {
                if(res.status === 200 || res.statusText === 'OK')
                this.setState({
                    isLoaded: true,
                    item: res.data.item
                })
            })
            .catch(err => err)
    }

    addToCart = (e) => {
        e.preventDefault()
        alert('added')
    }


    render(){

        let { isLoaded, item } = {...this.state}

        if(!isLoaded)
            return <h1>Loading...</h1>

        return(
            <div className="topics">
                <div className="topics__body">
                    <div className="topics__content">
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <div className="avatar"><img src="https://yabloki.ua/media/catalog/product/cache/4/image/768x512/9df78eab33525d08d6e5fb8d27136e95/m/a/macbookpro2015_without_touch_13-1200_01_2.jpg" alt="avatar" /></div>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <h5 >{item.name}</h5>
                                    </div>
                                    <div className="topic__date"><i className="icon-Watch_Later"></i><TimeFromNow value={item.lastModified} /></div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>{item.description}</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <i className="fa fa-eye"></i>
                                            <span> {item.view}</span>
                                        </div>
                                        <div>
                                            <i className="fa fa-sign-in"></i>
                                            <span><TimeFromNow value= {item.lastVisited} /></span>
                                        </div>
                                        <div>
                                            <a href="/" onClick={this.addToCart}><i className="fa fa-cart-plus"></i></a>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostSingle