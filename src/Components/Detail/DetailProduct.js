import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PageTitle from '../PageTitle'
import UserArea from './UserArea'
import { connect } from 'react-redux'
import * as action from '../../Action/index'
import ProductItem from '../Products/ProductItem'
import $ from 'jquery'


class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeImg: "",
            size: "S",
            quantity: 1,
            product: {},
            redirect: false
        }
    }

    getImageAtive = (e) => {
        var imgSelect = e.target.src
        $("#active__img").attr("src", imgSelect)
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
        var {size, quantity } = this.state
        var product = {}
        this.props.products.forEach(element => {
            if(this.props.match.params.id === element.MASP+""){
                product = element
            }
        });
        this.props.addCartItem(product, quantity, size)
        this.setState({
            redirect: true
        })
    }
    render() {
        var { products } = this.props
        var count = 1
        if(this.state.redirect){
            return <Redirect to = "/danh-sach-hoa-don"/>
        }
        return (
            <div>
                <PageTitle title={"Chi tiết sản phẩm"} />
                {
                    products.map((value, key) => {
                        if (value.MASP + "" === this.props.match.params.id) {
                            
                            return (
                                <div className="detail-product" key={key}>
                                    <div className="container">
                                        <div className="box__product-img">
                                            <div className="product__img-main">
                                                <img id="active__img" src={value.HINH} alt="clothes-shop" />
                                            </div>
                                            <div className="product__img-related">
                                                {
                                                    value.HINHLIENQUAN.map((item, key) => {
                                                        return <div key={key} className="img-item"><img onClick={(e) => { this.getImageAtive(e) }} src={item} /></div>
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
                                                    <div className="btn btn-dark"><Link to="/danh-sach-hoa-don">Buy it now</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })

                }
                <UserArea />
                <div className="related-product">
                    <div className="container">
                        <div className="title">
                            <h4>Related Product</h4>
                        </div>
                        <div className="product__list ">
                            {
                                products.map((value, key) => {
                                    if (count <= 4 && value.MASP + "" !== this.props.match.params.id) {
                                        count++
                                        return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />

                                    }

                                })


                            }

                        </div>
                    </div>
                </div>


            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)