import React from 'react'

const Footer = () => 
<footer>
<div className="footer js-dropdown">
    <div className="container">
        <div className="footer__logo">
            <div>
                <img src="http://www.azyrusthemes.com/forum2/fonts/icons/main/Logo_Forum.svg" alt="logo" />Unity
            </div>
        </div>
        <div className="footer__nav">
            <div className="footer__tline">
                <i className="icon-Support"></i>
                <ul className="footer__menu">
                    <li><a href="/">Support</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">The Team</a></li>
                </ul>
                <div className="footer__language">
                    <div className="footer__language-btn" data-dropdown-btn="language">Americas - English<i className="icon-Arrow_Below"></i></div>
                    <div className="footer__language-dropdown dropdown dropdown--design-01 dropdown--reverse-y" data-dropdown-list="language">
                        <div className="row">
                            <div className="col-6">
                                <h3>Region</h3>
                                <ul className="dropdown__catalog">
                                    <li className="active"><a href="/"><i></i>America</a></li>
                                    <li><a href="/"><i></i>Europe</a></li>
                                    <li><a href="/"><i></i>Asia</a></li>
                                    <li><a href="/"><i></i>China</a></li>
                                    <li><a href="/"><i></i>Australia</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <h3>Language</h3>
                                <ul className="dropdown__catalog">
                                    <li className="active"><a href="/"><i></i>English</a></li>
                                    <li><a href="/"><i></i>Espanol</a></li>
                                    <li><a href="/"><i></i>Portugues</a></li>
                                    <li><a href="/"><i></i>Chinese</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bline">
                <ul className="footer__menu">
                    <li className="footer__copyright"><span>&copy; 2017 azyrusthemes.com</span></li>
                    <li><a href="/">Teams</a></li>
                    <li><a href="/">Privacy</a></li>
                    <li><a href="/">Send Feedback</a></li>
                </ul>
                <ul className="footer__social">
                    <li><a href="/"><i className="fa fa-facebook-square" aria-hidden="true"></i> </a></li>
                    <li><a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
                    <li><a href="/"><i className="fa fa-google-plus" aria-hidden="true"></i> </a></li>
                    <li><a href="/"><i className="fa fa-dribbble" aria-hidden="true"></i> </a></li>
                    <li><a href="/"><i className="fa fa-cloud" aria-hidden="true"></i> </a></li>
                    <li><a href="/"><i className="fa fa-rss" aria-hidden="true"></i> </a></li>
                </ul>
                <div className="footer__language-btn-m" data-dropdown-btn="language">Americas - English<i className="icon-Arrow_Below"></i></div>
            </div>
        </div>
    </div>
</div>
</footer>

export default Footer