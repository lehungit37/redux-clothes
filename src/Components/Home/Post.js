import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="container">
                    <div className="title">
                        <h4>Recent Posts</h4>
                        <p>Check out the best offers to stay in trend</p>
                    </div>
                    <div className="post__list">
                        <div className="post__item">
                            <div className="img__post">
                                <img src="./images/post3.jpg" title="Recent post" alt = "clothes-shop"/>
                                <Link to = "/" title="Click For Read More" className="read"><i className="fas fa-link" /></Link>
                            </div>
                            <div className="content">
                                <div className="header__post">
                                    <div className="time">
                                        <span className="date">05</span>
                                        <span className="month">NOV</span>
                                    </div>
                                    <div className="title__post">
                                        <Link to = "/">Claritas est etiam processus dynamicus. </Link>
                                    </div>
                                </div>
                                <p className="desc">
                                    Uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures done...
                                </p>
                                <Link to = "/" className="read__more">Read more ...</Link>
                            </div>
                        </div>
                        <div className="post__item">
                            <div className="img__post">
                                <img src="./images/post1.jpg"  title="Recent post" alt = "clothes-shop" />
                                <Link to = "/" title="Click For Read More" className="read"><i className="fas fa-link" /></Link>
                            </div>
                            <div className="content">
                                <div className="header__post">
                                    <div className="time">
                                        <span className="date">05</span>
                                        <span className="month">NOV</span>
                                    </div>
                                    <div className="title__post">
                                        <Link to = "/">Claritas est etiam processus dynamicus. </Link>
                                    </div>
                                </div>
                                <p className="desc">
                                    Uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures done...
                                </p>
                                <Link to = "/" className="read__more">Read more ...</Link>
                            </div>
                        </div> <div className="post__item">
                            <div className="img__post">
                                <img src="./images/post2.jpg"  title="Recent post"  alt = "clothes-shop" />
                                <Link to = "/" title="Click For Read More" className="read"><i className="fas fa-link" /></Link>
                            </div>
                            <div className="content">
                                <div className="header__post">
                                    <div className="time">
                                        <span className="date">05</span>
                                        <span className="month">NOV</span>
                                    </div>
                                    <div className="title__post">
                                        <Link to = "/">Claritas est etiam processus dynamicus. </Link>
                                    </div>
                                </div>
                                <p className="desc">
                                    Uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures done...
                                </p>
                                <Link to = "/" className="read__more">Read more ...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
