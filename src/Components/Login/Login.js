import React, { Component } from 'react'
import PageTitle from '../PageTitle'
import {Link} from "react-router-dom"

export default class Login extends Component {
    render() {
        return (
            <div>
                <PageTitle title={"Login"} />
                <div className="main__login-form">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">New Customer</h3>
                                <h5>Register</h5>
                                <p>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                                </p>
                                <Link to = "/dang-ky" className="btn btn-primary">Continue</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Returning Customer</h3>
                                <p className="card-text">I am a returning customer</p>
                                <form action>
                                    <div className="form-group">
                                        <label>E-Mail Address</label>
                                        <input type="email" className="form-control" required aria-describedby="emailHelp" placeholder="Enter E-Mail Address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" required aria-describedby="emailHelp" placeholder="Enter Password" />
                                    </div>
                                    <div className="forgotten">
                                        <a href="#">Forgotten Password</a>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
