import React from 'react';
import Typed from 'typed.js';
import './Description.scss';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var options = {
      strings: ['Software Developer', 'Aerospace Engineer', 'Problem Solver', 'Powerlifter'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    };

    var typed = new Typed('.element', options);

    var stars = () => {
      let count = 20;
      let $bg = $('#bodyWrapper');
      for (var i = 0; i < count; i ++) {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.random() * 100 + 50;
        let duration = Math.random();
        let $newStar = $(`<i style="left:${x}px;width:1px;height:${y}px;animation-duration:${duration}s"></i>`);
        $bg.append($newStar);
      }
    }
    stars();
  }

  render () {
    return (
      <>
        <div className="textWrapper">
          <h2 className='staticText'>I'm <span className='name'>David Lim</span> and</h2>
          <h1 className='textChange'>I'm a <span className='element'></span></h1>
        </div>
        <div className='rocket'>
          <img src='/rocket.png' className='rocketPng'></img>
        </div>
      </>
    )
  }
}


export default Description;