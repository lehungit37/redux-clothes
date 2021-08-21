import React, { Component } from 'react'
import $ from 'jquery'
import * as action from '../../Action/index'
import {connect} from 'react-redux'

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: {
                by: "default",
                value: 1
            }
        }
    }

    displayFormSort = () => {
        $(".dropdown__menu").toggleClass("active__form")
    }

    sortProduct = (by, value) => {
        $(".dropdown__menu").removeClass("active__form")

        this.setState({
            sort: {
                by: by,
                value: value
            }
        })
        var sort = {by: by, value: value}
        this.props.getValueSort(sort)
    }
    render() {
        var {sort} = this.state
        return (
            <div className="sort">
               
                <div className="select-item">
                    <div className="btn btn-info btn-toggle-dropdown" onClick={() => { this.displayFormSort() }}>Sort by <i class="fas fa-sort-down"></i></div>
                    <div className="dropdown__menu ">
                        
                        <div className="dropdown__menu-item" onClick={(by, value) => { this.sortProduct("name", 1) }}>
                            <span>Name A <i class="fas fa-arrow-right"></i> Z</span>
                            <span className={ (sort.by === "name" && sort.value === 1) ? "fas fa-check  active__check" : "fas fa-check " }></span>
                        </div>
                        <div className="dropdown__menu-item" onClick={(by, value) => { this.sortProduct("name", -1) }}>
                            <span>Name Z <i class="fas fa-arrow-right"></i> A</span>
                            <span className={ (sort.by === "name" && sort.value === -1) ? "fas fa-check  active__check" : "fas fa-check "}></span>
                        </div>
                        <div className="dropdown__menu-item" onClick={(by, value) => { this.sortProduct("price", 1) }}>
                            <span>Price Low <i class="fas fa-arrow-right"></i> High</span>
                            <span className={(sort.by === "price" && sort.value === 1) ?  "fas fa-check  active__check" : "fas fa-check "}></span>
                        </div>
                        <div className="dropdown__menu-item" onClick={(by, value) => { this.sortProduct("price", -1) }}>
                            <span>Price High <i class="fas fa-arrow-right"></i> Low</span>
                            <span className={(sort.by === "price" && sort.value === -1) ? "fas fa-check  active__check" : "fas fa-check "}></span>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getValueSort: (sort) => {
            dispatch(action.sortProduct(sort))
        }
    }
}
export default connect(null, mapDispatchToProps)(Sort)