import React from 'react'

class Signup extends React.Component{

    render(){

        return(
            <div className="signup__main">
                <div className="container">
                    <div className="signup__container">
                        <div className="signup__form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="first-name">First Name</label>
                                        <input type="text" className="form-control" id="first-name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="last-name">Last Name</label>
                                        <input type="text" className="form-control" id="last-name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control" id="phone" />
                                    </div>
                                </div>
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" />
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" htmlFor="email">Emain Address</label>
                                <input type="text" className="form-control" id="email" />
                            </div>
                            <div className="signup__section">
                                <label className="signup__label" htmlFor="password">Password</label>
                                <div className="message-input">
                                    <input type="password" className="form-control" id="password" />
                                    <span className="message-input__strong">strong</span>
                                </div>
                            </div>
                            <div className="signup__checkbox">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="signup__box">
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <i></i>
                                            </label>
                                            <span>I agree to the Terms & Conditions.</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <a href="/" className="signup__btn-create btn btn--type-02">Create New Account</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Signup