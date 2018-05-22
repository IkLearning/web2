import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import { RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css"


const PostListPlaceHolder = () =>
    <ReactPlaceholder
        ready={false}
        showLoadingAnimation={true}
        customPlaceholder={myCustom}
    >
        <br/>
    </ReactPlaceholder>


const myCustom = (
    <div className='my-awesome-placeholder' style={{paddingTop: 20}}>
        <div className="posts__body">
            <div className="posts__item">
                <div className="posts__section-left">
                    <div className="posts__topic">
                        <div className="posts__content">
                            <RectShape color='#E0E0E0' style={{width: '30em', height: 15}} />
                            <RectShape color='#E0E0E0' style={{width: '27em', height: 15}} />
                        </div>
                    </div>
                    <div className="posts__category">
                        <RoundShape color='#E0E0E0' style={{width: 10, height: 10}} />
                        &nbsp;
                        <RectShape color='#E0E0E0' style={{width: '5em', height: 15}} />
                    </div>
                </div>
                <div className="posts__section-right">
                    <div className="posts__users">
                        <div>
                            <RoundShape color='#E0E0E0' style={{width: 35, height: 35}} />
                        </div>
                        <div>
                            <RoundShape color='#E0E0E0' style={{width: 35, height: 35}} />
                        </div>
                        <div>
                            <RoundShape color='#E0E0E0' style={{width: 35, height: 35}} />
                        </div>
                    </div>
                    <div className="posts__replies"><RectShape color='#E0E0E0' style={{width: '2em', height: 15}} /></div>
                    <div className="posts__views"><RectShape color='#E0E0E0' style={{width: '2em', height: 15}} /></div>
                    <div className="posts__activity"><RectShape color='#E0E0E0' style={{width: '2em', height: 15}} /></div>
                </div>
            </div>
        </div>
    </div>
)

export default PostListPlaceHolder