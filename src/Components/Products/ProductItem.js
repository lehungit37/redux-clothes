import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import $ from 'jquery'
import * as action from '../../Action/index';
import {connect} from 'react-redux'

class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            hover: false,
            redirect : false
        }
    }
    
    onMouseMove = (e) =>{
        this.setState({
            hover: true
        })
    }
    onMouseOut = () =>{
       this.setState({
           hover :false
       })
    }
    scrollTop = () =>{
        $("html, body").animate({
            scrollTop: 0
        },1500)
    }
   
    addToCart = () =>{
        var {value} = this.props
        var size = value.SIZE[0]
        this.props.addToCart(value, 1, size);
        this.setState({
            redirect: true
        }) 
    }
    render() {
        if(this.state.redirect){
            return <Redirect to = "/danh-sach-hoa-don"/>
        }
        return (
            <div className="product__item" onClick = {() =>{this.scrollTop()}} onMouseOver ={() =>{this.onMouseMove()}} onMouseOut ={() =>{this.onMouseOut()}}>
                <div className="product__img">
                    <Link to = {"/chi-tiet-san-pham/"+this.props.tensp+"."+ this.props.id+".html"}>
                        <img src={this.props.hinh} alt = "clothes-shop" />
                    </Link>
                    <div className={(this.state.hover) ? "product__handle active__hover" : "product__handle"}>
                        <div className="btn__handle btn__addCart" onClick = {() =>{this.addToCart()}}>
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                        </div>
                        <Link to = {"/chi-tiet-san-pham/"+this.props.tensp +"."+ this.props.id+".html"} className="btn__handle btn__view">
                            <i className="fas fa-eye" />
                        </Link>
                    </div>
                </div>
                <div className="infor">
                    <div className="product__name"><Link to = {"chi-tiet-san-pham/"+this.props.tensp+"."+ this.props.id+".html"}>{this.props.tensp}</Link></div>
                    <div className="product__price">
                        {new Intl.NumberFormat("vi-VN").format(this.props.gia)+ " VND"}
                    </div>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToCart: (product, quantity, size) => {
            dispatch(action.addCartItem(product, quantity, size))
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem)