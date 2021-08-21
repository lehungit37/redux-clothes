import React, { Component } from 'react'
import {connect  } from 'react-redux'
import * as action from '../../Action/index'

class ViewCartItem extends Component {

    onDeleteCartItem = () =>{
        var {idCartItem} = this.props.value
        this.props.deleteCartItem(idCartItem)
    }
    render() {
        var {value} = this.props
        return (
            <div className="item-cart">
                <div className="product__cart-img">
                    <img src={value.product.HINH} alt = "clothes-shop" />
                </div>
                <div className="product__cart-info">
                    <h3>{value.product.TENSP}</h3>
                    <h5>Size: <span>{value.size}</span></h5>
                </div>
                <div className="product__cart-price">{new Intl.NumberFormat("vi-VN").format(value.product.GIA) +" VND"}</div>
                <div className="product__cart-quantity">
                    <div className="minus" onClick = {() =>{this.props.updateQuantityCartItem(value,-1)}}><i className="fa fa-minus" aria-hidden="true" /></div>
                    <input type="text" id="quantity" value = {this.props.quantity} disabled={true} />
                    <div className="plus"  onClick = {() =>{this.props.updateQuantityCartItem(value, +1)}}><i className="fa fa-plus" aria-hidden="true" /></div>
                </div>
                <div className="product__cart-total">{new Intl.NumberFormat("vi-VN").format(this.props.quantity * value.product.GIA) + " VND"}</div>
                <div className="btn__delete-cart" onClick = {() =>{this.onDeleteCartItem()}} ><i className="fa fa-times" aria-hidden="true" /></div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteCartItem: (idCartItem) => {
            dispatch(action.deleteCartItem(idCartItem))
        },
        updateQuantityCartItem : (value, quantity) =>{
            dispatch(action.updateQuantityCartItem(value, quantity))
        }
    }
}
export default connect(null, mapDispatchToProps)(ViewCartItem)