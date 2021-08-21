import React, { Component } from "react";
import {Link } from "react-router-dom"

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="top__footer">
                    <div className="container">
                        <div className="list__footer">
                            <div className="item__footer">
                                <div className="title__fotter">
                                    <img src="https://preview.hasthemes.com/xoss-preview/img/logo-3.png" alt = "clothes-shop"  />
                                </div>
                                <p>
                                    <span>Address: </span> 28 Green Tower, Street Name New York
                                    City, USA
                                </p>
                                <p>
                                    <span>Telephone: </span> 0355912653
                                </p>
                                <p>
                                    <span>Email: </span> phihung492000@gmail.com
                                </p>
                                <div className="social-icon">
                                    <Link to = "/">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to = "/">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to = "/">
                                        <i className="fab fa-google-plus-g" />
                                    </Link>
                                    <Link to = "/">
                                        <i className="fab fa-youtube" />
                                    </Link>
                                </div>
                            </div>
                            <div className="item__footer">
                                <div className="title__footer">
                                    <h3>Services</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link to = "/">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Return Policy</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Our Blog</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Term &amp; Condition</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="item__footer">
                                <div className="title__footer">
                                    <h3>Account</h3>
                                </div>
                                <ul>
                                    <li>
                                        <Link to = "/">Your Account</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Check Out</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Login</Link>
                                    </li>
                                    <li>
                                        <Link to = "/">Register</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="item__footer">
                                <div className="title__footer">
                                    <h3>NewsLetter</h3>
                                </div>
                                <p>Subscribe by our newsletter and get update protidin.</p>
                                <div className="form__email">
                                    <input type="email" name id placeholder="Email Address" />
                                    <div className="btn btn-danger">
                                        <a href>Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom__footer">
                    <div className="container">
                        <div className="coppyright">
                            <p>
                                2016 ® All Rights Reserved - <Link to = "/">BootExperts</Link>
                                Responsive Theme{" "}
                            </p>
                        </div>
                        <div className="payment__method">
                            <img src="./images/payment-method.png" alt = "clothes-shop" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
