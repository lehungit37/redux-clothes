import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"
import Home from '../Components/Home/Home'
import Products from "../Components/Products/Products"
import ViewCart from '../Components/ViewCart/ViewCart'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'
import News from '../Components/News/News'
import NotFound from '../Components/NotFound/NotFound'
import DetailProduct from '../Components/Detail/DetailProduct'

export default class Router extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/danh-sach-san-pham/:slug.:id.html" component={Products} />
                <Route exact path="/chi-tiet-san-pham/:slug.:id.html" component={DetailProduct} />
                <Route path="/danh-sach-hoa-don" component = {ViewCart} />
                <Route path="/dang-nhap" component = {Login} />
                <Route path="/dang-ky" component = {Register} />
                <Route path="/tin-tuc" component = {News} />
                <Route path="" component = {NotFound} />
                   
            </Switch>

        )
    }
}
