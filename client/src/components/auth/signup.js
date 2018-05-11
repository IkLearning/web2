import React from 'react'

class Signup extends React.Component{

    render(){

        return(
            <main className="signup__main">
                <img className="signup__bg" src="images/signup-bg.png" alt="bg" />
        
                <div className="container">
                    <div className="signup__container">
                        <div className="signup__logo">
                            <a href="#"><img src="fonts/icons/main/Logo_Forum.svg" alt="logo" />Unity</a>
                        </div>
        
                        <div className="signup__head">
                            <h3>Create a New Unity Account</h3>
                            <p>By singin up you can start posting, replaying to topics, earn badges, favorite, vote topics and many more.</p>
                        </div>
                        <div className="signup__form">
                            <div className="row" data-visible="desktop">
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" for="first-name">First Name</label>
                                        <input type="text" className="form-control" id="first-name" value="Jane" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" for="last-name">Last Name</label>
                                        <input type="text" className="form-control" id="last-name" value="Doe" />
                                    </div>
                                </div>
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" for="username">Username</label>
                                <input type="text" className="form-control" id="username" value="Janeunity9" />
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" for="email">Emain Address</label>
                                <input type="text" className="form-control" id="email" value="Jane326@gmail.com" />
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" for="password">Password</label>
                                <div className="message-input">
                                    <input type="password" className="form-control" id="password" value="*********" />
                                    <span className="message-input__strong">strong</span>
                                </div>
                            </div>
                            <div className="signup__checkbox">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="signup__box">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" checked="checked" />
                                                <i></i>
                                            </label>
                                            <span>I agree to the Terms & Conditions.</span>
                                        </label>
                                    </div>
                                    <div className="col-md-6" data-visible="desktop">
                                        <label className="signup__box">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <i></i>
                                            </label>
                                            <span>Subscribe to newsletter</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="signup__btn-create btn btn--type-02">Create New Account</a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Signup