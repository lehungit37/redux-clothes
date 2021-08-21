import React, { Component } from "react";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Carts from "./Components/Carts/Carts";
import $ from 'jquery'
import Routers from "./Router/Router";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as action from './Action/index'

 class App extends Component {

    onScrollTop = () => {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    }

    render() {
        var {displayCartMini} = this.props
        return (
            <Router>
                <div>
                    <div className={(displayCartMini) ? "opacity__body active__opacity":"opacity__body"} onClick =  {() =>{this.props.closeMiniCart()}}></div>

                    <Menu />
                    <Carts />
                    <Routers />
                    <Footer />
                    <div className="btn__scrollTop" onClick={() => { this.onScrollTop() }}>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                </div>

            </Router>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeMiniCart: () => {
            dispatch(action.closeMiniCart())
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        displayCartMini: state.displayMiniCartForm
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)