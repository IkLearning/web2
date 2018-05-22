import React from 'react'

const Footer = () => 
<footer>
<div className="footer">
    <div className="container">
        <div className="footer__nav">
            <div className="footer__tline">
                <ul className="footer__menu">
                    <li className="footer__copyright"><span>&copy; IK 2018</span></li>
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
            </div>
        </div>
    </div>
</div>
</footer>

export default Footer