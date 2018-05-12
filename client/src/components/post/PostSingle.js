import React from 'react'
import axios from 'axios'
import TimeFromNow from '../time/TimeFromNow'

class PostSingle extends React.Component{

    state = {
        isLoaded: false,
        data: {}
    }

    componentDidMount = () =>{
        axios.get(`http://localhost:3001/products/${this.props.match.params.id}`)
            .then(res => {
                if(res.status === 200 || res.statusText === 'OK')
                this.setState({
                    isLoaded: true,
                    data: res.data
                })
            })
            .catch(err => console.log(err))
    }


    render(){

        let { isLoaded, data } = {...this.state}

        if(!isLoaded)
            return <h1>Loading...</h1>

        return(
            <div className="topics">
                <div className="topics__heading">
                    <h2 className="topics__heading-title">{data.name}</h2>
                    <div className="topics__heading-info">
                        <a href="/" className="category"><i className="bg-3ebafa"></i> Exchange</a>
                        <div className="tags">
                            <a href="/" className="bg-4f80b0">gaming</a>
                            <a href="/" className="bg-424ee8">nature</a>
                            <a href="/" className="bg-36b7d7">entertainment</a>
                        </div>
                    </div>
                </div>
                <div className="topics__body">
                    <div className="topics__content">
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/B.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Benjamin Caesar</a>
                                    </div>
                                    <div className="topic__date"><i className="icon-Watch_Later"></i><TimeFromNow value={data.created_at} /></div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>{data.description}</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>201</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>08</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>39</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/"><i className="icon-Bookmark"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <div className="topic__content">
                                <div className="topic__info">
                                    <div className="topic__info-section">
                                        <div>
                                            <span className="topic__info-title">Created</span>
                                            <div  className="topic__info-avatar">
                                                <a href="/" className="avatar"><img src="fonts/icons/avatars/B.svg" alt="avatar" /></a>
                                                <span>13d</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="topic__info-title">Last reply</span>
                                            <div  className="topic__info-avatar">
                                                <a href="/" className="avatar"><img src="fonts/icons/avatars/A.svg" alt="avatar" /></a>
                                                <span>4h</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="topic__info-section">
                                        <div>
                                            <span className="topic__info-title">Replies</span>
                                            <div  className="topic__info-count">18</div>
                                        </div>
                                        <div>
                                            <span className="topic__info-title">Views</span>
                                            <div  className="topic__info-count">205</div>
                                        </div>
                                        <div>
                                            <span className="topic__info-title">Users</span>
                                            <div  className="topic__info-count">6</div>
                                        </div>
                                        <div>
                                            <span className="topic__info-title">Likes</span>
                                            <div  className="topic__info-count">315</div>
                                        </div>
                                        <div>
                                            <span className="topic__info-title">Links</span>
                                            <div  className="topic__info-count">7</div>
                                        </div>
                                    </div>
                                    <a href="/" className="topic__info-more"><i className="icon-Arrow_Down"></i></a>
                                </div>
                                <div className="topic__title">
                                    <p>Frequent Posters</p>
                                </div>
                                <div className="topic__posters">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/C.svg" alt="avatar" /><span>10</span></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/U.svg" alt="avatar" /><span>5</span></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/I.svg" alt="avatar" /><span>12</span></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/K.svg" alt="avatar" /></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/N.svg" alt="avatar" /></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/T.svg" alt="avatar" /></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/K.svg" alt="avatar" /></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/L.svg" alt="avatar" /></a>
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/R.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__title">
                                    <p>Popular Links</p>
                                </div>
                                <div className="topic__list">
                                    <ul>
                                        <li><span>12</span><a href="/">Deepest and darkest secrets. <span>imgur.com</span></a></li>
                                        <li><span>1</span><a href="/">Help Center. <span>techlabs.net</span></a></li>
                                        <li><span>7</span><a href="/">Best 20 youtube videos. <span>youtube.com</span></a></li>
                                        <li><span>19</span><a href="/">Bootstrap 4, things you need to know.</a></li>
                                        <li><span>3</span><a href="/">Best Simpson jokes.</a></li>
                                    </ul>
                                </div>
                                <div className="topic__title">
                                    <p>There are <span>81 replies</span> with an estimated read time of <span>11 minutes.</span></p>
                                </div>
                                <div className="topic__btns">
                                    <a href="/" className="btn btn--type-02">Summarize <span data-visible="desktop">This</span>Topic</a>
                                    <div className="topic__select">
                                        <p>Sort replies by:</p>
                                        <div className="btn-select"><i className="icon-Favorite_Topic"></i>Most Liked</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/N.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Nicolas</a>
                                    </div>
                                    <div className="topic__date">
                                        <div className="topic__user topic__user--pos-r">
                                            <i className="icon-Reply_Fill"></i>
                                            <a href="/" className="avatar"><img src="fonts/icons/avatars/B.svg" alt="avatar" /></a>
                                            <a href="/" className="topic__user-name">Benjamin Caesar</a>
                                        </div>
                                        <i className="icon-Watch_Later"></i>06 May, 2017
                                    </div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>I am using BootStrap 4, but they are asking me to use PHP framework, which I won't do. My code is secure against SQL injection, XSS and all other attacks, it is well organized, i was using OOP. I just think CodeCanyon will always find a reason to reject my work....</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>137</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>02</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>46</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/"><i className="icon-Bookmark"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topics__promo">
                            <a href="/"><img src="images/topic-promo.jpg" alt="promo" /></a>
                        </div>
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/T.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Tesla</a>
                                    </div>
                                    <div className="topic__date"><i className="icon-Watch_Later"></i>07 May, 2017</div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>Yeah! This is really bad. Rejecting an item because its not using a PHP framework(no matter what the script is doing) is a wrong move I think. There are a lot of people reporting this problem(Rejected because of not using a framework).</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>71</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>06</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>42</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Reply_Empty"></i></a>
                                            <span>01</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/" className="active"><i className="icon-Already_Bookmarked"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic topic--comment">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/L.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Larry</a>
                                    </div>
                                </div>
                                <a href="/" className="topic__arrow topic__arrow--up"><i className="icon-Arrow_Up"></i></a>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>Can you stop ADP, and create new option for author can create coupon code, Author will give for their customer. It's better than now.</p>
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/K.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Kevin</a>
                                    </div>
                                    <div className="topic__date"><i className="icon-Watch_Later"></i>08 May, 2017</div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>I will, but I'm not doing it for me, i'll open ticket for the community.<br/>I got accepted with no problems on other marketplace.</p>
                                    <div className="topic topic--answer">
                                        <div className="topic__head">
                                            <div className="topic__caption">
                                                <div className="topic__user">
                                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/T.svg" alt="avatar" /></a>
                                                    <a href="/" className="topic__user-name">Tesla</a>
                                                </div>
                                            </div>
                                            <a href="/" className="topic__arrow"><i className="icon-Arrow_Up"></i></a>
                                        </div>
                                        <div className="topic__content">
                                            <div className="topic__text">
                                                <p>Yeah! This is really bad. Rejecting an item because its not using a PHP framework(no matter what the script is doing) is a wrong move I think.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Subscribers may download more than an ad-hoc purchaser on a marketplace, but by retaining subscribers over time (paying money every month), there’s more money in total for contributors.</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>415</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>28</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>49</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/"><i className="icon-Bookmark"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic topic--selected">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/C.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Callis</a>
                                    </div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>This post has been hidden by a moderator. Received too much downvotes.</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>617</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-show">
                                        <a href="/" className="btn">Show me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/R.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Robin</a>
                                    </div>
                                    <div className="topic__date"><i className="icon-Watch_Later"></i>09 May, 2017</div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>Does our 60% more expensive milk go well with your 60% more expensive coffee?</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>21</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>03</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>08</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/"><i className="icon-Bookmark"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="topic">
                            <div className="topic__head">
                                <div className="topic__avatar">
                                    <a href="/" className="avatar"><img src="fonts/icons/avatars/L.svg" alt="avatar" /></a>
                                </div>
                                <div className="topic__caption">
                                    <div className="topic__name">
                                        <a href="/">Larry</a>
                                    </div>
                                    <div className="topic__date">
                                        <div className="topic__user topic__user--pos-r">
                                            <i className="icon-Reply_Fill"></i>
                                            <a href="/" className="avatar"><img src="fonts/icons/avatars/T.svg" alt="avatar" /></a>
                                            <a href="/" className="topic__user-name">Tesla</a>
                                        </div>
                                        <i className="icon-Watch_Later"></i>3d
                                    </div>
                                </div>
                            </div>
                            <div className="topic__content">
                                <div className="topic__text">
                                    <p>Can you stop ADP, and create new option for author can create coupon code, Author will give for their customer. It's better than now.</p>
                                </div>
                                <div className="topic__footer">
                                    <div className="topic__footer-likes">
                                        <div>
                                            <a href="/"><i className="icon-Upvote"></i></a>
                                            <span>139</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Downvote"></i></a>
                                            <span>32</span>
                                        </div>
                                        <div>
                                            <a href="/"><i className="icon-Favorite_Topic"></i></a>
                                            <span>68</span>
                                        </div>
                                    </div>
                                    <div className="topic__footer-share">
                                        <div data-visible="desktop">
                                            <a href="/"><i className="icon-Share_Topic"></i></a>
                                            <a href="/"><i className="icon-Flag_Topic"></i></a>
                                            <a href="/"><i className="icon-Bookmark"></i></a>
                                        </div>
                                        <div data-visible="mobile">
                                            <a href="/"><i className="icon-More_Options"></i></a>
                                        </div>
                                        <a href="/"><i className="icon-Reply_Fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topics__calendar">
                        <div className="calendar">
                            <div className="calendar__top">
                                <a href="/" className="calendar__btn calendar__btn--c-01"><i className="icon-Calender"></i></a>
                            </div>
                            <div className="calendar__center">
                                <div className="calendar__first">Jun 12</div>
                                <div className="calendar__range">
                                    <div className="calendar__current">
                                        <p>31 / 75</p>
                                        <span>Jun 17</span>
                                    </div>
                                </div>
                                <div className="calendar__last">6h ago</div>
                            </div>
                            <div className="calendar__bottom">
                                <a href="/" className="calendar__btn calendar__btn--c-01"><i className="icon-Track"></i></a>
                                <a href="/" className="calendar__btn calendar__btn--c-02"><i className="icon-Reply_Fill"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topics__title"><i className="icon-Watch_Later"></i>This topic will close 6 months after the last reply.</div>
                <div className="topics__control">
                    <a href="/" className="btn"><i className="icon-Bookmark"></i>Bookmark</a>
                    <a href="/" className="btn"><i className="icon-Share_Topic"></i>Share</a>
                    <a href="/" className="btn"><i className="icon-Flag_Topic"></i>Flag</a>
                    <a href="/" className="btn"><i className="icon-Add_User"></i>Invite</a>
                    <a href="/" className="btn"><i className="icon-Track"></i>Track</a>
                    <a href="/" className="btn btn--type-02" data-visible="desktop"><i className="icon-Reply_Fill"></i>Reply</a>
                </div>
                <div className="topics__title">Suggested Topics</div>
            </div>
        )
    }
}

export default PostSingle