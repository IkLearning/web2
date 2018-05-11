import React from 'react'
import PostListPlaceHolder from './PostListPlaceHolder'

class PostList extends React.Component{

    state ={
        isLoaded: true
    }

    render(){

        var { isLoaded } = {...this.state}

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
                    <div className="posts__body">
                        <div className="posts__item bg-fef2e0">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3><i><img src="http://www.azyrusthemes.com/forum2/fonts/icons/main/Pinned.svg" alt="Pinned" /></i>Welcome New Users! Please read this before posting!</h3>
                                        </a>
                                        <p>Congratulations, you have found the Community! Before you make a new topic or post, please read community guidelines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users js-dropdown">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/B.svg" alt="avatar" data-dropdown-btn="user-b" /></a>
                                        <div className="posts__users-dropdown dropdown dropdown--user dropdown--reverse-y" data-dropdown-list="user-b">
                                            <div className="dropdown__user">
                                                <a href="/" className="dropdown__user-label bg-218380">B</a>
                                                <div className="dropdown__user-nav">
                                                    <a href="/"><i className="icon-Add_User"></i></a>
                                                    <a href="/"><i className="icon-Message"></i></a>
                                                </div>
                                                <div className="dropdown__user-info">
                                                    <a href="/">Tesla Motors</a>
                                                    <p>Last post 4 hours ago. Joined Jun 1, 16</p>
                                                </div>
                                                <div className="dropdown__user-icons">
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Intermediate.svg" alt="user-icon"/></a>
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Bot.svg" alt="user-icon"/></a>
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Animal_Lover.svg" alt="user-icon"/></a>
                                                </div>
                                                <div className="dropdown__user-statistic">
                                                    <div>Threads - <span>1184</span></div>
                                                    <div>Posts - <span>5,863</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/K.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/O.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">66</div>
                                <div className="posts__views">15.1k</div>
                                <div className="posts__activity">11d</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Current news and discussion</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-368f8b"></i>Politics</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/A.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/G.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/P.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">31</div>
                                <div className="posts__views">14.5k</div>
                                <div className="posts__activity">13d</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Get your username drawn by the other users of unity! or a drawing based on what you do</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-4f80b0">gaming</a>
                                            <a href="/" className="bg-424ee8">nature</a>
                                            <a href="/" className="bg-36b7d7">entertainment</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-4436f8"></i>Video</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/L.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/T.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">252</div>
                                <div className="posts__views">396</div>
                                <div className="posts__activity">13m</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Which movie have you watched most recently?</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-3ebafa"></i> Exchange</a></div>
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
                                <div className="posts__views">7.5k</div>
                                <div className="posts__activity">41m</div>
                            </div>
                        </div>
                        <div className="posts__item posts__item--bg-gradient">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3><span>This post contails spoiler about</span> Star Wars Movie.</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-777da7"></i> Q&amp;As</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/F.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">2.3k</div>
                                <div className="posts__views">2.0k</div>
                                <div className="posts__activity">1h</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Take a picture of what you’re doing at this very moment</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-ec008c">selfie</a>
                                            <a href="/" className="bg-7cc576">camera</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-c6b38e"></i> Pets</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/C.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/U.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/I.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">441</div>
                                <div className="posts__views">3.1k</div>
                                <div className="posts__activity">6h</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Name Generator/Pick-n-Choose Nonsense</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-3a3a17">username</a>
                                            <a href="/" className="bg-6f7e9c">funny</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-525252"></i> Education</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/K.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/N.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/Q.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">1.3k</div>
                                <div className="posts__views">6.0k</div>
                                <div className="posts__activity">7h</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3><i className="icon-Locked"></i>I got an Amazon thingie!</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-bce784"></i> Tech</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/C.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/W.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/Y.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">5.7k</div>
                                <div className="posts__views">33.6k</div>
                                <div className="posts__activity">13h</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Post the weirdest thing you own here!</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-525252"></i> Education</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/D.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/M.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/R.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">236</div>
                                <div className="posts__views">2.3k</div>
                                <div className="posts__activity">10h</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Show me your awesome photography</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-f26522">photography</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-c49bbb"></i> Science</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users js-dropdown">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/E.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/R.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/T.svg" alt="avatar" data-dropdown-btn="user-t"/></a>
                                        <div className="posts__users-dropdown dropdown dropdown--user dropdown--open" data-dropdown-list="user-t">
                                            <div className="dropdown__user">
                                                <a href="/" className="dropdown__user-label bg-00bd9d">T</a>
                                                <div className="dropdown__user-nav">
                                                    <a href="/"><i className="icon-Add_User"></i></a>
                                                    <a href="/"><i className="icon-Message"></i></a>
                                                </div>
                                                <div className="dropdown__user-info">
                                                    <a href="/">Tesla Motors</a>
                                                    <p>Last post 4 hours ago. Joined Jun 1, 16</p>
                                                </div>
                                                <div className="dropdown__user-icons">
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Intermediate.svg" alt="user-icon"/></a>
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Bot.svg" alt="user-icon"/></a>
                                                    <a href="/"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Animal_Lover.svg" alt="user-icon"/></a>
                                                </div>
                                                <div className="dropdown__user-statistic">
                                                    <div>Threads - <span>1184</span></div>
                                                    <div>Posts - <span>5,863</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__replies">3</div>
                                <div className="posts__views">519</div>
                                <div className="posts__activity">2d</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>GAMERS UNITE! What games do the Unity Community play?</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-5dd39e"></i> Random</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/H.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/M.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/Y.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">60</div>
                                <div className="posts__views">891</div>
                                <div className="posts__activity">1h</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Take a virtual tour of the world’s creepiest basement!</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-83253f"></i> Gaming</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/L.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/A.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">587</div>
                                <div className="posts__views">3.8k</div>
                                <div className="posts__activity">3d</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Climbing Mount Borah in centeral Idaho</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-a3d39c">climbing</a>
                                            <a href="/" className="bg-6f7e9c">funny</a>
                                            <a href="/" className="bg-92278f">adventure</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-a7cdbd"></i> Entertainment</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/I.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/O.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/S.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">628</div>
                                <div className="posts__views">997</div>
                                <div className="posts__activity">1h</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Post your artwork!</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-c6b38e"></i> Pets</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/S.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/G.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">147</div>
                                <div className="posts__views">397</div>
                                <div className="posts__activity">3h</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Who’s playing Overwatch?</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-ff755a"></i> Arts</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/K.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/L.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/R.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">274</div>
                                <div className="posts__views">2.9k</div>
                                <div className="posts__activity">1d</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>Tell me about your recent dream</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-f9bc64"></i> Hobbies</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/N.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/H.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">0</div>
                                <div className="posts__views">2.9k</div>
                                <div className="posts__activity">1d</div>
                            </div>
                        </div>
                        <div className="posts__item bg-f2f4f6">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>A thread in which you tell users to go to sleep</h3>
                                        </a>
                                        <div className="posts__tags tags">
                                            <a href="/" className="bg-8781bd">dreams</a>
                                            <a href="/" className="bg-f1ab32">life</a>
                                            <a href="/" className="bg-3b96ca">reason</a>
                                            <a href="/" className="bg-348aa7">social</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-348aa7"></i> Social</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/J.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/D.svg" alt="avatar"/></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/Q.svg" alt="avatar"/></a>
                                    </div>
                                </div>
                                <div className="posts__replies">129</div>
                                <div className="posts__views">752</div>
                                <div className="posts__activity">19m</div>
                            </div>
                        </div>
                        <div className="posts__item">
                            <div className="posts__section-left">
                                <div className="posts__topic">
                                    <div className="posts__content">
                                        <a href="/">
                                            <h3>What’s everyone drinking?</h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="posts__category"><a href="/" className="category"><i className="bg-5dd39e"></i> Random</a></div>
                            </div>
                            <div className="posts__section-right">
                                <div className="posts__users">
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/B.svg" alt="avatar" /></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/M.svg" alt="avatar" /></a>
                                    </div>
                                    <div>
                                        <a href="/" className="avatar"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/avatars/Z.svg" alt="avatar" /></a>
                                    </div>
                                </div>
                                <div className="posts__replies">305</div>
                                <div className="posts__views">2.1k</div>
                                <div className="posts__activity">6m</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default PostList