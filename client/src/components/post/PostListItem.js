import React from 'react'
import { Link } from 'react-router-dom'
import TimeFromNow from '../time/TimeFromNow'
import NumericLabel from 'react-pretty-numbers'

class PostListItem extends React.Component{

    render(){
        
        return(
            <div className="posts__body">
                <div className="posts__item">
                    <div className="posts__section-left">
                        <div className="posts__topic">
                            <div className="posts__content">
                                <Link to={{
                                    pathname: `/${this.props.value.category.slug}/${this.props.value.slug}`,
                                    state: {
                                        id: this.props.value._id
                                    }
                                }}>
                                    <div className="avatar"><img src="https://yabloki.ua/media/catalog/product/cache/4/image/768x512/9df78eab33525d08d6e5fb8d27136e95/m/a/macbookpro2015_without_touch_13-1200_01_2.jpg" alt="avatar"/></div>
                                    <h3>{this.props.value.name}</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="posts__category">
                            <a onClick={() => this.props.getByCat(this.props.value.category._id)} className="category">
                                <i className="bg-3ebafa"></i>
                                {this.props.value.category.name}
                            </a>
                        </div>
                    </div>
                    <div className="posts__section-right">
                        <div className="posts__replies">
                            <Link to={{pathname: `/${this.props.value.category.slug}/${this.props.value.slug}`}}>
                                <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </div>
                        <div className="posts__views"><NumericLabel params={{shortFormat: true}}>{this.props.value.view}</NumericLabel></div>
                        <div className="posts__views">
                            <NumericLabel params={{shortFormat: true}}>
                                {this.props.value.price}
                            </NumericLabel>
                        </div>
                        <div className="posts__activity text-center">
                            <TimeFromNow value={this.props.value.lastVisited} />
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default PostListItem