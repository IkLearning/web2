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
                                <Link to={{pathname: `/thread/${this.props.value.id}`}}>
                                    <h3>{this.props.value.name}</h3>
                                </Link>
                            </div>
                        </div>
                        <div className="posts__category"><Link to={{pathname: `category/${this.props.value.id_type}`}} className="category"><i className="bg-3ebafa"></i> Exchange</Link></div>
                    </div>
                    <div className="posts__section-right">
                        <div className="posts__users">
                            <div>
                                <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/E.svg" alt="avatar"/></a>
                            </div>
                            <div>
                                <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/I.svg" alt="avatar"/></a>
                            </div>
                            <div>
                                <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/R.svg" alt="avatar"/></a>
                            </div>
                        </div>
                        <div className="posts__replies">207</div>
                        <div className="posts__views"><NumericLabel params={{shortFormat: true}}>{this.props.value.view}</NumericLabel></div>
                        <div className="posts__activity"><TimeFromNow value={this.props.value.last_visited}/></div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default PostListItem