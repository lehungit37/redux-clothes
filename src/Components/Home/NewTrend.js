import React, { Component } from 'react'
import ProductItem from '../Products/ProductItem'
import $ from 'jquery'
import {connect} from 'react-redux'
 class NewTrend extends Component {

    changeActiveTab = (e) =>{
        const idTab = e.target.id
        const classTab = idTab.replace("#", ".")
        $('.trend__block').removeClass('active__tab')
        $(idTab).addClass('active__tab')

        $('.small__menu__item').removeClass('active__small__menu')
        $(classTab).addClass("active__small__menu")
    }
    render() {
        var {products} = this.props
        var count = 1
        return (
            <div className="new__trend">
                <div className="container">
                    <div className="title">
                        <h4>News trend</h4>
                        <p>Check out the best offers to stay in Trend</p>
                    </div>
                    <ul className="small__menu">
                        <li id="#tab-featured" onClick  = {(e) =>{this.changeActiveTab(e)}} className="small__menu__item tab-featured active__small__menu "><i className="fas fa-paper-plane" />Featured</li>
                        <li id="#tab-latest" onClick  = {(e) =>{this.changeActiveTab(e)}} className="small__menu__item tab-latest"><i className="fa fa-cubes" /> Latest</li>
                        <li id="#tab-special" onClick  = {(e) =>{this.changeActiveTab(e)}} className="small__menu__item tab-special"><i className="fas fa-chart-area" />Special</li>
                        <li id="#tab-bestseller" onClick  = {(e) =>{this.changeActiveTab(e)}} className="small__menu__item tab-bestseller"><i className="fa fa-heart" />Bestseller</li>
                    </ul>
                    <div className="trend__block active__tab " id="tab-featured">
                        <div className="product__list ">
                            {
                                products.map((value, key) => {
                                    if (value.MALOAI === 1) {
                                        return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="trend__block" id="tab-latest">
                        <div className="product__list ">
                        {
                                products.map((value, key) => {
                                    if (value.MALOAI === 2) {
                                        return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="trend__block" id="tab-special">
                        <div className="product__list ">
                        {
                                products.map((value, key) => {
                                    if (value.MALOAI === 3) {
                                        return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="trend__block" id="tab-bestseller">
                        <div className="product__list ">
                        {
                                products.map((value, key) => {
                                    if (value.MALOAI === 4) {
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

export default connect(mapStateToProps, null)(NewTrend)
