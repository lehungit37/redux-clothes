import React, { Component } from "react";
import {connect} from 'react-redux'
import * as action from '../../Action/index'

 class CartItem extends Component {
    formatNumber = (number) =>{
        return new Intl.NumberFormat("vi-VN").format(number)
    }

    onDeleteCartItem = () =>{
        var {idCartItem} = this.props.value
        this.props.deleteCartItem(idCartItem)
    }
    render() {
        var {value, quantity} = this.props
        return (

            <div className="item__product">
                <div className="img__product">
                    <img src={value.product.HINH} alt = "clothes-shop" />
                    <p>{this.formatNumber(value.product.GIA) + " VND"}</p>
                </div>
                <div className="info__product">
                    <p className="name__product">{value.product.TENSP}</p>
                    <p className="size">Size: <span>{value.size}</span></p>
                    <div className="change">
                        <div className="minus" onClick = {() =>{this.props.updateQuantityCartItem(value, -1)}}>-</div>
                        <input type="text"  value = {quantity} disabled={true} />
                        <div className="plus"  onClick = {() =>{this.props.updateQuantityCartItem(value, 1)}}>+</div>
                        <div className="total">{this.formatNumber(value.product.GIA * quantity) + " VND"}</div>
                    </div>
                </div>
                <div className="btn__delete" onClick = {() =>{this.onDeleteCartItem()}}><i className="fas fa-times" /></div>
            </div>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        displayMiniCart: state.prop
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
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)