import React, { Component } from 'react'
import PageTitle from '../PageTitle'
import Control from './Control'
import ProductItem from './ProductItem'
import Sort from './Sort'
import { connect } from 'react-redux'

class Products extends Component {
   
    filterPrice = (products, price) => {
        products.filter(item => item.GIA <= price)
    }
  

    render() {
        var { products, filterPrice, sort } = this.props
        if (filterPrice === 0) {
            products = products
        }
        else products = products.filter(item => item.GIA <= filterPrice)
        
        if (sort.by === "default") products = products

        switch (sort.by) {
            
            case "name":
                products.sort((a,b)=>{
                    if(a.TENSP > b.TENSP) return (sort.value)
                    else if(a.TENSP < b.TENSP) return - (sort.value)
                    else return 0
                }); break;
            case "price":
                products.sort((a,b) =>{
                    if(a.GIA > b.GIA) return (sort.value)
                    else if(a.GIA < b.GIA) return - (sort.value)
                    else return 0
                });break
            
        }

        return (
            <div>
                <PageTitle title={"Danh sách sản phẩm"} />
                <div className="main">
                    <div className="container ">
                        <Control idParams={this.props.match.params.id} />



                        <div className="products">
                            <Sort />

                            <div className="product__list">
                                {
                                    products.map((value, key) => {
                                        if (this.props.match.params.id === value.MALOAI + "") {
                                            return <ProductItem key={key} value={value} tensp={value.TENSP} gia={value.GIA} hinh={value.HINH} id={value.MASP} />
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product,
        filterPrice: state.filterPrice,
        sort: state.sort
    }
}

export default connect(mapStateToProps, null)(Products)
