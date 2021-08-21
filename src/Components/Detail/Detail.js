import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as action from '../../Action/index'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImg: "",
            size: "S",
            quantity: 1,
            product: {}
        }
    }

    componentDidMount() {
        this.props.products.map((value, key) => {
            if (value.MASP+"" === this.props.idParams) {
                this.setState({
                    activeImg: value.HINH,
                    product: value
                })
            }
        })
    }

    getImageAtive = (e) => {
        var imgSelect = e.target.src
        this.setState({
            activeImg: imgSelect
        })
    }

    getSizeActive = (event) => {
        var size = event.target.title
        this.setState({
            size: size
        })
    }

    minusQuantity = () => {
        if (this.state.quantity === 1) {
            alert("Số lượng đặt hàng không ít hơn 1")
        }
        else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }
    plusQuantity = () => {
        if (this.state.quantity === 10) {
            alert("Số lượng đặt hàng không lớn hơn 10")
        }
        else {
            this.setState({
                quantity: this.state.quantity + 1
            })
        }
    }

    addCartItem = () => {
        var { product, size, quantity } = this.state
        this.props.addCartItem(product, quantity, size)
    }
    render() {
        var { products } = this.props
        console.log(this.state.activeImg)
        return (
            products.map((value, key) => {
                if (value.MASP + "" === this.props.idParams) {
                    return (
                        <div className="detail-product">
                            <div className="container">
                                <div className="box__product-img">
                                    <div className="product__img-main">
                                        <img src={this.state.activeImg} alt="clothes-shop" />
                                    </div>
                                    <div className="product__img-related">
                                        {
                                            value.HINHLIENQUAN.map((item, key) => {
                                                return <div key={key} className="img-item"><img onClick={(e) => { this.getImageAtive(e) }} src={item} alt /></div>
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="info-buy">
                                    <div className="info-product">
                                        <h3 className="name-product">{value.TENSP}</h3>
                                        <span className="price-product">{new Intl.NumberFormat("vi-VN").format(value.GIA) + " VND"}</span>
                                    </div>
                                    <div className="select-buy">
                                        <div className="select-size">
                                            <h5>Size: <span id="size">{this.state.size}</span></h5>
                                            <div className="list-size">
                                                {
                                                    value.SIZE.map((item, key) => {

                                                        return <div key={key} onClick={(event) => { this.getSizeActive(event) }} className={this.state.size === item ? "size-item active__size" : "size-item"} title={item}>{item}</div>
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="quantity">
                                            <h5>Quantity</h5>
                                            <div className="form-quantity">
                                                <div className="minus change" onClick={(quantity) => { this.minusQuantity() }}><i className="fa fa-minus" aria-hidden="true" /></div>
                                                <input type="text" id="quantity" value={this.state.quantity} disabled />
                                                <div className="plus change" onClick={(quantity) => { this.plusQuantity() }}><i className="fa fa-plus" aria-hidden="true" /></div>
                                            </div>
                                        </div>
                                        <div className="list__btn">
                                            <div className="btn btn-secondary" onClick={() => { this.addCartItem() }}>Add to cart</div>
                                            <div className="btn btn-dark"><a href>Buy it now</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addCartItem: (product, quantity, size) => {
            dispatch(action.addCartItem(product, quantity, size))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)