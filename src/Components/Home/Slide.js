import React, { Component } from 'react'
import $ from 'jquery'
export default class Slide extends Component {
    
    next = () =>{
        var nextSlide = $('.active__slide').next();
       var indexDot = $('.active__dot').index()+1;

       if(nextSlide.length !== 0){
            $('.active__slide').addClass('undisplay');
            $('.active__slide').one('webkitAnimationEnd', () =>{
                $('.undisplay').removeClass('active__slide').removeClass('undisplay');
            })

            nextSlide.addClass('active__slide').addClass('display').one('webkitAnimationEnd', () =>{
                $('.display').removeClass('display');
            })
            $('.active__dot').removeClass('active__dot');
            $('.dot__item:nth-child(' + (indexDot + 1) + ')').addClass('active__dot');
            $('.slide__item .intro').removeClass('active__intro');
            $('.slide__item:nth-child(' + (indexDot + 1) + ') .intro').addClass('active__intro');
            
       }
       else{
            $('.active__slide').addClass('undisplay');
            $('.active__slide').one('webkitAnimationEnd', () =>{
                $('.undisplay').removeClass('active__slide').removeClass('undisplay');
            })

            $('.slide__item:first-child').addClass('active__slide').addClass('display').one('webkitAnimationEnd', () =>{
                $('.display').removeClass('display');
            })
            $('.active__dot').removeClass('active__dot');
            $('.dot__item:first-child').addClass('active__dot');
            $('.slide__item .intro').removeClass('active__intro');
            $('.slide__item:first-child .intro').addClass('active__intro');
       }
    }

    prev = () =>{
        var prevSlide = $('.active__slide').prev();
        var indexDot = $('.active__dot').index()+1;
 
        if(prevSlide.length !== 0){
             $('.active__slide').addClass('undisplay');
             $('.active__slide').one('webkitAnimationEnd', () =>{
                 $('.undisplay').removeClass('active__slide').removeClass('undisplay');
             })
 
             prevSlide.addClass('active__slide').addClass('display').one('webkitAnimationEnd', () =>{
                 $('.display').removeClass('display');
             })
             $('.active__dot').removeClass('active__dot');
             $('.dot__item:nth-child(' + (indexDot + 1) + ')').addClass('active__dot');
             $('.slide__item .intro').removeClass('active__intro');
             $('.slide__item:nth-child(' + (indexDot + 1) + ') .intro').addClass('active__intro');
             
        }
        else{
             $('.active__slide').addClass('undisplay');
             $('.active__slide').one('webkitAnimationEnd', () =>{
                 $('.undisplay').removeClass('active__slide').removeClass('undisplay');
             })
 
             $('.slide__item:last-child').addClass('active__slide').addClass('display').one('webkitAnimationEnd', () =>{
                 $('.display').removeClass('display');
             })
             $('.active__dot').removeClass('active__dot');
             $('.dot__item:last-child').addClass('active__dot');
             $('.slide__item .intro').removeClass('active__intro');
             $('.slide__item:last-child .intro').addClass('active__intro');
        }
      
    }

    componentDidMount() {
        var interval =  setInterval(() =>{
            $('.btn__next').trigger('click');
        }, 10000)
        this.setState({
            interval: interval
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    
    render() {
        return (
            <div className="slide">
                <div className="slide__list">
                    <div className="slide__item slide1 active__slide">
                        <img src="./images/slide1.jpg" alt = "clothes-shop" />
                        <div className="intro active__intro">
                            <h5>XOSS SHOP</h5>
                            <h4>WOMEN'S NEW FASHION</h4>
                            <p>See our full collection.s summer 2016 Lookbook</p>
                            <a href="#">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="slide__item slide2">
                        <img src="./images/slide2.jpg" alt = "clothes-shop" />
                        <div className="intro ">
                            <h5>XOSS SHOP</h5>
                            <h4>WOMEN'S NEW FASHION</h4>
                            <p>See our full collection.s summer 2016 Lookbook</p>
                            <a href="#">SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <ul className="dot__list">
                    <li className="dot__item active__dot" />
                    <li className="dot__item" />
                </ul>
                <ul className="arrow__list">
                    <li className="arrow__item btn__prev" onClick = {() =>{this.prev()}}><i className="fas fa-chevron-left" /></li>
                    <li className="arrow__item btn__next" onClick = {() =>{this.next()}}><i className="fas fa-chevron-right" /></li>
                </ul>
            </div>

        )
    }
}
