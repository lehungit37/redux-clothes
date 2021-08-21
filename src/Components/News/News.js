import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class News extends Component {
    render() {
        return (
            <div>
                <h4>Page tin tức đang được bảo trì. Vui lòng quay lại sau</h4>
                <Link to="/">Về trang chủ</Link>
            </div>
        )
    }
}
