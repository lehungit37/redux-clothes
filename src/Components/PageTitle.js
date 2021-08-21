import React, { Component } from 'react'

export default class PageTitle extends Component {
    render() {
        return (
            <div className="info__page">
                <div className="container">
                    <div className="page__title">{this.props.title}</div>
                    
                </div>
            </div>

        )
    }
}
