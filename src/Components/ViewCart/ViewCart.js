import React, { Component } from 'react'
import ViewCartItem from './ViewCartItem'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class ViewCart extends Component {


    formatNumber = (number) => {
        return new Intl.NumberFormat("vi-VN").format(number) + " VND"
    }
    subTotalCart = (cart) => {
        var subtotal = 0
        cart.forEach(element => {
            subtotal += (element.quantity * element.product.GIA)
        });


        return subtotal
    }
    total = (cart) => {
        const fee = 0
        return fee + this.subTotalCart(cart)
    }

   
    render() {
        var { cart } = this.props
        var count = 0
        cart.map((element) => {
            count += element.quantity
        })
        return (
            <div>
                <div className="view__cart-header">
                    <div className="container">
                        <Link to="/" className="back-home"><i className="fa fa-angle-left" aria-hidden="true" /> Continue Shoppping</Link>
                        <h3>Cart</h3>
                        <span>{count + (count <= 1 ? " item" : " items")}</span>
                    </div>
                </div>
                <div className="view__cart-main">
                    <div className="container">
                        <div className="list-cart">
                            {
                                cart.map((value, key) => { return <ViewCartItem quantity={value.quantity} value={value} key={key} /> })
                            }

                        </div>
                    </div>
                </div>
                <div className="view__cart-bottom">
                    <div className="container">
                        <div className="your__note">
                            <div className="form-group">
                                <label htmlFor="textarea" className="control-label">Note with your order</label>
                                <div className="col-sm-12">
                                    <textarea name id="textarea" className="form-control" rows={4} placeholder="Note with your order" defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <div className="into__money">
                            <h5>Subtotal <span>{this.formatNumber(this.subTotalCart(cart))}</span></h5>
                            <h5>Total <span>{this.formatNumber(this.total(cart))}</span></h5>
                            <div className="btn btn-dark"><a href>Check out</a></div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ViewCart)