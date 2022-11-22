import React from 'react';
import Typed from 'typed.js';
import './Description.scss';
import $ from 'jquery';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: true
    }
  }

  componentDidMount() {
    var options = {
      strings: ['Software Developer', 'Aerospace Engineer', 'Problem Solver', 'Critical Thinker'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    };

    var typed = new Typed('.element', options);

    var press = () => {
      let pressed = this.state.pressed;
      let $rocket = $('#rocketWrapper');
      let $button = $('#button');
      if (pressed) {
        $rocket.removeClass('launch');
        let $starWrapper = $('#starWrapper');
        $starWrapper.empty();
        $button.removeClass('pressed');
        $button.addClass('notPressed');
        $button.text('LAUNCH');
      } else {
        $rocket.addClass('launch');
        $button.addClass('pressed');
        $button.removeClass('notPressed');
        $button.text('LAND');
        stars();
      }
      this.setState({pressed: !pressed})
    }

    var stars = () => {
      let count = 40;
      let $starWrapper = $('#starWrapper');
      for (var i = 1; i <= count; i ++) {
        let x = Math.floor(Math.random() * window.innerWidth) - $starWrapper.offset().left;
        let y = -$starWrapper.offset().top + Math.random() * window.innerHeight;
        let height = Math.random() * 100 + 50;
        let duration = Math.random() * 0.8 + 0.2;
        let $newStar = $(`<i style="left:${x}px;top:${y}px;width:2px;
          height:${height}px;animation-duration:${duration}s"></i>`);
        $starWrapper.append($newStar);
      }
    }
    stars();
    // var rocket = $('.rocket')[0];
    // rocket.onmouseenter = () => {stars()};
    // rocket.onmouseleave = () => {
    //   let $starWrapper = $('#starWrapper');
    //   $starWrapper.empty();
    // }
    var $button = $('#button');
    $button.click(() => {press()});
  }

  render () {
    return (
      <div className="description" id="desc" style={{backgroundImage:"url(/space3.jpg)"}}>
        <div className="textWrapper">
          <h2 className='staticText'>I'm <span className='name'>David Lim</span> and</h2>
          <br></br> <br></br>
          <h1 className='textChange'>I'm a <span className='element'></span></h1>
        </div>
        <div id='rocket' className='rocket'>
          <div className='launchButton'>
            <button id="button" className='pressed'><span>LAND</span></button>
          </div>
          <div id="starWrapper"></div>
          <div id="rocketWrapper" className="launch">
            <img src='/rocket.png' id='rocketPng' className='rocketPng'></img>
          </div>
        </div>
      </div>
    )
  }
}


export default Description;