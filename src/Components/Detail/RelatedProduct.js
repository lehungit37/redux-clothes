import React, { Component } from 'react'
import ProductItem from '../Products/ProductItem'
import { connect } from 'react-redux'

class RelatedProduct extends Component {
    render() {
        var { products, idParams } = this.props
        var count = 1
        var maloai = null
        return (
            <div className="related-product">
                <div className="container">
                    <div className="title">
                        <h4>Related Product</h4>
                    </div>
                    <div className="product__list ">
                        {
                            products.map((value, key) => {
                                if (count <= 4 && value.MASP+"" !== idParams) {
                                    count++
                                    return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />

                                }

                            })


                        }
                      
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
export default connect(mapStateToProps, null)(RelatedProduct)