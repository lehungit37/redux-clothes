import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LOAIHANG from '../../Database/LOAIHANG.json'
import { connect } from "react-redux"
import * as action from '../../Action/index'

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxPriceFilter: 0,
            minPriceFilter: 0,
            priceDisplay: 0,
        }
    }



    UNSAFE_componentWillReceiveProps(nextProps) {
        var { idParams } = nextProps
        var { products } = this.props
        var max = 0;
        var minArray = [];

        // var { products, idParams } = this.props
        products.forEach(element => {
            if (element.MALOAI + "" === idParams) {
                if (element.GIA >= max) {
                    max = element.GIA
                }
            }
        });
        products.forEach(element => {
            if (element.MALOAI + "" === idParams) {
                minArray.push(element.GIA)
            }
        });
        minArray.sort((a, b) => {
            if (a - b > 0) return 1
            else if (a - b < 0) return -1
            else return 0
        })

        var min = minArray[0]

        this.setState({
            maxPriceFilter: max,
            priceDisplay: max,
            minPriceFilter: min
        })
    }

    changeRangeFilter = (e) => {
        var value = e.target.value
        this.setState({
            priceDisplay: value
        })
        this.props.filterPrice(value ? value : this.state.priceDisplay)
    }

    render() {
        return (
            <div className="control">
                <div className="list__control">
                    <div className="item__control" id="categories">
                        <h3>Categories</h3>
                        <ul>

                            {
                                LOAIHANG.map((value, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={value.TENLOAI + "." + value.MALOAI + ".html"}>{value.TENLOAI}</Link>
                                        </li>
                                    )
                                })
                            }


                        </ul>
                    </div>
                    {/**filter produtc with price */}
                    <div className="item__control" id="filter">
                        <h3>Filter</h3>
                        <form>
                            <div className="form-group">
                                <label >Price</label>
                                <input name="rangeFilter" onChange={(e) => { this.changeRangeFilter(e) }} id="my-input" className="form-control-range" type="range" min={this.state.minPriceFilter} max={this.state.maxPriceFilter} defaultValue={this.state.priceDisplay} step={(this.state.maxPriceFilter - this.state.minPriceFilter) / 10} />
                                <span className="range__price text-center w-100">{this.state.priceDisplay}</span>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="panner">
                    <div className="item">
                        <a href>
                            <img src="http://aaryaweb.info/opc/theshop/sho001/image/cache/catalog/left-banner2-277x404.jpg" alt="clothes-shop" />
                        </a>
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
        filterPrice: (price) => {
            dispatch(action.filterPrice(price))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Control)