import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends React.Component{

    state = {
        categories: []
    }

    componentDidMount = () => {
        axios.get('http://localhost:3001/api/v1/categories')
                .then(res => {
                    this.setState({
                        categories: res.data.items
                    })
                })
                .catch(err => console.log(err))
    }

    randomBG = () => {
        let bg =
                [
                    'bg-f9bc64', 'bg-348aa7', 'bg-4436f8', 'bg-5dd39e', 'bg-ff755a', 'bg-bce784', 'bg-83253f',
                    'bg-c49bbb', 'bg-3ebafa', 'bg-c6b38e', 'bg-a7cdbd', 'bg-525252', 'bg-777da7', 'bg-368f8b'
                ]
        let rd = Math.floor(Math.random() * Math.floor(bg.length))
        return bg[rd]
    }

    render(){

        let { categories } = this.state

        return(
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
                                        {
                                            categories.map((item) => 
                                            <li className="col-6" key={item._id}><Link to={{pathname: `/${item.slug}`, state: {id: item._id}}} className="category"><i className={this.randomBG()}></i>{item.name}</Link></li>
                                            )
                                        } 
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

        )
    }

}

export default Header