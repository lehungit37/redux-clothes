import React, { Component } from 'react'
import Slider from 'react-slick'
import ProductItem from '../Products/ProductItem'
import { connect } from 'react-redux'

class Featured extends Component {
    render() {
        var { products } = this.props
        var count = 1
        var settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true
        }
        return (
            <div className="featured">
                <div className="container">
                    <div className="title">
                        <h4>featured product</h4>
                        <p>Check out the best offers to stay in Trend</p>
                    </div>

                    <Slider {...settings}>
                        {/* <div className="product__list"> */}

                        {
                            products.map((value, key) => {
                                if (count <=8) {
                                    count ++

                                    return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />
                                }
                            })
                        }

                        {/* </div> */}
                    </Slider>

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
export default connect(mapStateToProps, null)(Featured)