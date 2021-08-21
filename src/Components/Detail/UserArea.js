import React, { Component } from 'react'
import $ from 'jquery'

export default class UserArea extends Component {

    changeTabActive = (e) =>{
        var idTab = e.target.id
        var classTab = idTab.replace("#", ".")
        $('.control__tab').removeClass("active__control__tab");
        $(classTab).addClass("active__control__tab");
        $(".tab").removeClass("active__tab");
        $(idTab).addClass("active__tab")

    }
    render() {
        return (
            <div className="user-area">
                <div className="container">
                    <ul className="list-tab">
                        <li onClick = {(e) =>{this.changeTabActive(e)}} id="#tab-detail" className="control__tab tab-detail active__control__tab ">Detail</li>
                        <li onClick = {(e) =>{this.changeTabActive(e)}} id="#tab-delivery" className="control__tab tab-delivery">Delivery</li>
                        <li onClick = {(e) =>{this.changeTabActive(e)}} id="#tab-review" className="control__tab tab-review">Review</li>
                    </ul>
                    <section>
                        <div id="tab-detail" className="tab active__tab">
                            <p>Blue Life's best selling Festival Romper features an update floral print with swiss dots throughout, smocked tube bodice with overlay detail, and a loose flowing skirt over shorts.</p>
                            <ul>
                                <li>Made in USA</li>
                                <li>Dry Clean Only</li>
                                <li>100% Rayon</li>
                                <li>Model is 5ft 7 inches; Bust: 32”, Waist: 23”, Hips: 33”</li>
                                <li>Model is wearing a size XS</li>
                                <li>Relaxed Fit</li>
                            </ul>
                            <i>This store is a demo only, product available for purchase from <a href>Shop Planet Blue</a></i>
                        </div>
                        <div id="tab-delivery" className="tab">
                            <p>Delivery is free to all US destinations.<br />Please allow 2-3 days for regular shipping.</p>
                            <p>Expedited shipping for a small cost may be selected at checkout</p>
                        </div>
                        <div id="tab-review" className="tab ">
                            <form action>
                                <h3>Write Your Review</h3>
                                <div className="form_group">
                                    <label htmlFor>Your Name </label>
                                    <input type="text" name id="input" className="form-control" defaultValue required="required" pattern title />
                                </div>
                                <div className="form_group">
                                    <label htmlFor>Your Review </label>
                                    <textarea name id="input" className="form-control" rows={3} required="required" defaultValue={""} />
                                </div>
                                <div className="form_group">
                                    <label htmlFor>Rating</label>
                                    <div className="form-check form-check-inline">
                                        <span>Bad</span>
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="radio" name="rating" id defaultValue="checkedValue" />
                                            <input className="form-check-input" type="radio" name="rating" id defaultValue="checkedValue" />
                                            <input className="form-check-input" type="radio" name="rating" id defaultValue="checkedValue" />
                                            <input className="form-check-input" type="radio" name="rating" id defaultValue="checkedValue" />
                                            <input className="form-check-input" type="radio" name="rating" id defaultValue="checkedValue" />
                                        </label>
                                        <span>Good</span>
                                    </div>
                                </div>
                                <div className="btn btn-primary">Review</div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}
