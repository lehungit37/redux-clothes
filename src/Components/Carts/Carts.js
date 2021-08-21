import React, { Component } from "react";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as action from '../../Action/index'

class Carts extends Component {

    formatNumber = (number) =>{
        return new Intl.NumberFormat("vi-VN").format(number)
    }
    subTotalCart = (cart) => {
        var subtotal = 0
        cart.forEach((element) => {
            subtotal += (element.quantity * element.product.GIA)
        })
        return subtotal
    }

    total = (cart) =>{
        const fee = 0
        return fee + this.subTotalCart(cart)
    }

    countCart = (cart) =>{
        var count = 0
        cart.forEach(element=>{
            count += element.quantity
        })

        return count
    }
    render() {
        var { cart, displayMiniCart } = this.props
        return (
            <div className={(displayMiniCart) ? "list__cart active__listcart" : "list__cart"}>
                <div className="header__cart">
                    <div className="btn__close" title="Close Cart" onClick={() => { this.props.closeMiniCart() }}>
                        <i className="fa fa-times" aria-hidden="true" />
                    </div>
                    <h3>Cart</h3>
                    <span>{this.countCart(cart) + (this.countCart(cart) <= 1?" item":" items")}</span>
                </div>
                <div className="list__product">
                    {
                        cart.map((value, key) => {
                            return <CartItem value={value} key={key} quantity={value.quantity} />
                        })
                    }
                </div>
                <div className="detail">
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p className="sub__price">{this.formatNumber(this.subTotalCart(cart)) +" VND"}</p>
                    </div>
                    <div className="total">
                        <p>Total</p>
                        <p className="total__price">{this.formatNumber(this.total(cart)) +" VND"}</p>
                    </div>
                </div>
                <div className="control__product">
                    <div onClick={() => { this.props.closeMiniCart() }}>
                        <Link to="/danh-sach-hoa-don" className="btn btn-dark">
                            View Cart
                        </Link>
                    </div>
                    <a href="#" className="btn btn-dark">
                        Check Out
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart,
        displayMiniCart: state.displayMiniCartForm
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        closeMiniCart: () => {
            dispatch(action.closeMiniCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carts)