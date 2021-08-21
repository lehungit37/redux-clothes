import React, { Component } from "react";
import LOAIHANG from '../../Database/LOAIHANG.json'
import {BrowserRouter as NavLink, Link} from "react-router-dom";
import {connect} from 'react-redux'
import  * as action from '../../Action/index'


class Menu extends Component {
    render() {
        return (
            <div className="menu sticky">
                <div className="container">
                    <div className="menu__top">
                        <div className="menu__topList">
                            <div className="menu__topItem">
                                <Link to = "/dang-nhap">Đăng nhập</Link>
                            </div>
                            <div className="menu__topItem">
                                <Link to = "/dang-ky">Đăng ký</Link>
                            </div>
                            <div className="menu__topItem">
                                <div id="cart" onClick = {() =>{this.props.openMiniCart()}}>
                                    <i className="fas fa-shopping-bag" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="logo">
                            <Link to = '/'>
                                <img src="https://preview.hasthemes.com/xoss-preview/xoss/img/logo.png" alt="clothes-shop" />
                            </Link>
                        </div>
                        <ul className="navbar__list">
                            <li className="navbar__item">
                                <Link to = "/">Home</Link>
                            </li>
                            {
                                LOAIHANG.map((value, key) => {
                                    return (
                                        <li key = {key} className="navbar__item">
                                            <Link key = {key} to={"/danh-sach-san-pham/" + value.TENLOAI + "." + value.MALOAI + ".html"}>{value.TENLOAI}</Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="navbar__item">
                                <Link to = "/tin-tuc">Blog</Link>
                            </li>
                        </ul>
                        <div className="search">
                            <input type="text" placeholder="Search" name = "search" />
                            <div className="btn-search">
                                <i className="fas fa-search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openMiniCart: () => {
            dispatch(action.openMiniCart())
        }
    }
}
export default connect(null, mapDispatchToProps)(Menu)