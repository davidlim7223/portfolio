import React from 'react';
import Typed from 'typed.js';
import './Description.scss';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var $desc = $('.description');
    $desc[0].style.backgroundImage = "url('/space3.jpg')";
    var options = {
      strings: ['Software Developer', 'Aerospace Engineer', 'Problem Solver', 'Critical Thinker', 'Power Lifter'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    };

    var typed = new Typed('.element', options);

    var stars = () => {
      let count = 40;
      let $starWrapper = $('#starWrapper');
      for (var i = 1; i <= count; i ++) {
        let x = Math.floor(Math.random() * window.innerWidth) - $starWrapper.offset().left;
        let y = -$starWrapper.offset().top;
        let height = Math.random() * 100 + 50;
        let duration = Math.random() * 0.8 + 0.2;
        let $newStar = $(`<i style="left:${x}px;top:${y}px;width:2px;
          height:${height}px;animation-duration:${duration}s"></i>`);
        $starWrapper.append($newStar);
      }
    }
    stars();
  }

  render () {
    return (
      <div className="description">
        <div className="textWrapper">
          <h2 className='staticText'>I'm <span className='name'>David Lim</span> and</h2>
          <br></br> <br></br>
          <h1 className='textChange'>I'm a <span className='element'></span></h1>
        </div>
        <a className='transition' href="#about-wrapper">
          <div className='rocket'>
            <div id="starWrapper"></div>
            <img src='/rocket.png' className='rocketPng'></img>
          </div>
        </a>
      </div>
    )
  }
}


export default Description;