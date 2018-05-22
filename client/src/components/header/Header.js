import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
<header>
    <div className="header js-header js-dropdown">
        <div className="container">
            <div className="header__logo">
                <h1>
                    <img src="http://www.azyrusthemes.com/forum2/fonts/icons/main/Logo_Forum.svg" alt="logo" />
                </h1>
                <div className="header__logo-btn">
                    <Link to="/"> Home </Link>
                </div>
            </div>
            <div className="header__search">
                <form action="/">
                    <label>
                        <i className="icon-Search js-header-search-btn-open"></i>
                        <input type="search" placeholder="Search all products" className="form-control" />
                    </label>
                </form>
                <div className="header__search-close js-header-search-btn-close"><i className="icon-Cancel"></i></div>
            </div>
            <div className="header__menu">
                <div className="header__menu-btn" data-dropdown-btn="menu">
                    Menu<i className="icon-Menu_Icon"></i>
                </div>
                <nav className="dropdown dropdown--design-01" data-dropdown-list="menu">
                    <div>
                        <h3>Categories</h3>
                        <ul className="dropdown__catalog row">
                            <li className="col-6"><a href="/" className="category"><i className="bg-f9bc64"></i>Hobbies</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-348aa7"></i>Social</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-4436f8"></i>Video</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-5dd39e"></i>Random</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-ff755a"></i>Arts</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-bce784"></i>Tech</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-83253f"></i>Gaming</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-c49bbb"></i>Science</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-3ebafa"></i>Exchange</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-c6b38e"></i>Pets</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-a7cdbd"></i>Entertainment</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-525252"></i>Education</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-777da7"></i>Q&amp;As</a></li>
                            <li className="col-6"><a href="/" className="category"><i className="bg-368f8b"></i>Politics</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="header__notification">
                <div className="header__notification-btn" data-dropdown-btn="notification">
                    <i className="fa fa-shopping-cart"></i>
                    <span>6</span>
                </div>
                <div className="dropdown dropdown--design-01" data-dropdown-list="notification">
                    <div>
                        <a href="/">
                            <i className="icon-Favorite_Topic"></i>
                            <p>Roswell . 16 feb, 17<span>Which movie have you watched recently?</span></p>
                        </a>
                        <a href="/">
                            <i className="icon-Reply_Empty"></i>
                            <p>Callis . 18 feb, 17<span>I got an amzon thingie!</span></p>
                        </a>
                        <a href="/">
                            <i className="icon-Badge"></i>
                            <p>Earned Badge . 19 feb, 17<span><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Lets_talk.svg" alt="Lets Talk" />Lets Talk</span></p>
                        </a>
                        <a href="/">
                            <i className="icon-Badge"></i>
                            <p>Earned Badge . 21 feb, 17<span><img src="http://www.azyrusthemes.com/forum2/fonts/icons/badges/Intermediate.svg" alt="Intermediate" />Intermediate</span></p>
                        </a>
                        <a href="/">
                            <i className="icon-Share_Topic"></i>
                            <p>Charlie . 22 feb, 17<span>Need Video file of that cat.</span></p>
                        </a>
                        <a href="/">
                            <i className="icon-Pencil"></i>
                            <p>Greentea . 22 feb, 17<span>New Facebook like and share button.</span></p>
                        </a>
                        <span><a href="/">view older notifications...</a></span>
                    </div>
                </div>
            </div>
            <div className="header__user">
                <div className="header__user-btn" data-dropdown-btn="user">
                    Account<i className="icon-Arrow_Below"></i>
                </div>
                <nav className="dropdown dropdown--design-01" data-dropdown-list="user">
                    <div>
                        <div className="dropdown__icons">
                            <a href="/"><i className="icon-Bookmark"></i></a>
                            <a href="/"><i className="icon-Message"></i></a>
                            <a href="/"><i className="icon-Preferences"></i></a>
                            <a href="/"><i className="icon-Logout"></i></a>
                        </div>
                    </div>
                    <div>
                        <ul className="dropdown__catalog">
                            <li><Link to="/auth/profile">Profile</Link></li>
                            <li><Link to="/admin">DashDoard</Link></li>
                            <li><Link to="/auth/signup">Signup</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className="header__offset-btn">
            <Link to="/new-product"><img src="http://www.azyrusthemes.com/forum2/fonts/icons/main/New_Topic.svg" alt="New Topic" /></Link>
        </div>
    </div>
</header>

export default Header