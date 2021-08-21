import React, { Component } from 'react'
import PageTitle from '../PageTitle'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>
                <PageTitle title={"Register"} />
                <div className="main__register-form">
                    <div className="container">
                        <h3>Register Account</h3>
                        <p>If you already have an account with us, please login at the <Link to = "/dang-nhap">login page</Link>.</p>
                        <form action>
                            <div className="listform">
                                <div className="form__item">
                                    <h5>Your Persional Details</h5>
                                    <div className="form__group">
                                        <label htmlFor>Last Name</label>
                                        <input type="text" name id placeholder="First Name" required />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor>Last Name</label>
                                        <input type="text" name id placeholder="Last Name" required />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor>Email</label>
                                        <input type="email" name id required />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor>Telephone</label>
                                        <input type="tel" name id placeholder="Telephone" required />
                                    </div>
                                </div>
                                <div className="form__item">
                                    <h5>Your Password</h5>
                                    <div className="form__group">
                                        <label htmlFor>Password</label>
                                        <input type="password" name id placeholder="Password" required />
                                    </div>
                                    <div className="form__group">
                                        <label htmlFor>Password Confirm</label>
                                        <input type="password" name id placeholder="Password Confirm" required />
                                    </div>
                                </div>
                                <div className="form__item">
                                    <div className="form__group">
                                        <label htmlFor>Subscribe</label>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="yes-no" id defaultValue="checkedValue" />
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="yes-no" id defaultValue="checkedValue" defaultChecked />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__item submit">
                                    <span>I have read and agree  Privacy Policy</span>
                                    <div className="btn btn-primary">Continue</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}
