import React from 'react'

class Login extends React.Component{

    handleChange = (e) => this.setState({[e.target.id]: e.target.value})

    render(){
        return (
            <div className="signup__main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="signup__container">
                                <div className="signup__form">
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" onChange={this.handleChange} />
                                    </div>
                                    <div className="signup__section">
                                        <label className="signup__label" htmlFor="password">Password</label>
                                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                                    </div>
                                    <a href="/" className="signup__btn-create btn btn--type-02">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Login