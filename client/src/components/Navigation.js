import React from 'react'

class Navigation extends React.Component{

    render(){

        return(
            <div className="nav">
                <div className="nav__categories js-dropdown">
                    <div className="nav__select">
                        <div className="btn-select" data-dropdown-btn="categories">All Categories</div>
                        <nav className="dropdown dropdown--design-01" data-dropdown-list="categories">
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
                        </nav>
                    </div>
                    <div className="nav__select">
                        <div className="btn-select" data-dropdown-btn="tags">Tags</div>
                        <div className="dropdown dropdown--design-01" data-dropdown-list="tags">
                            <div className="tags">
                                <a href="/" className="bg-4f80b0">gaming</a>
                                <a href="/" className="bg-424ee8">nature</a>
                                <a href="/" className="bg-36b7d7">entertainment</a>
                                <a href="/" className="bg-ef429e">selfie</a>
                                <a href="/" className="bg-7cc576">camera</a>
                                <a href="/" className="bg-3a3a17">username</a>
                                <a href="/" className="bg-6f7e9c">funny</a>
                                <a href="/" className="bg-f26522">photography</a>
                                <a href="/" className="bg-a3d39c">climbing</a>
                                <a href="/" className="bg-92278f">adventure</a>
                                <a href="/" className="bg-8781bd">dreams</a>
                                <a href="/" className="bg-f1ab32">life</a>
                                <a href="/" className="bg-3b96ca">reason</a>
                                <a href="/" className="bg-348aa7">social</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav__menu js-dropdown">
                    <div className="nav__select">
                        <div className="btn-select" data-dropdown-btn="menu">Latest</div>
                        <div className="dropdown dropdown--design-01" data-dropdown-list="menu">
                            <ul className="dropdown__catalog">
                                <li><a href="/">Latest</a></li>
                                <li><a href="/">Unread</a></li>
                                <li><a href="/">Rising</a></li>
                                <li><a href="/">Most Liked</a></li>
                                <li><a href="/">Follow Feed</a></li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li className="active"><a href="/">Latest</a></li>
                        <li><a href="/">Unread</a></li>
                        <li><a href="/">Rising</a></li>
                        <li><a href="/">Most Liked</a></li>
                        <li><a href="/">Follow Feed</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation