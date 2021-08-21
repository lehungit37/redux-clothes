import React, { Component } from 'react'
import Banner from './Banner'
import Featured from './Featured'
import NewTrend from './NewTrend'
import Post from './Post'
import Service from './Service'
import Slide from './Slide'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slide/>
                <Banner/>
                <Featured/>
                <NewTrend/>
                <Post/>
                <Service/>
            </div>
        )
    }
}
