import React from 'react';
import './FunFacts.scss';
import $ from 'jquery';
class FunFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['AngelaHP.jpg', 'korean_photo.jpg', 'flowerBella.jpg', 'candidMinnie.jpg', 'x-ray.jpg', 'squat.jpg'],
      description: ['I have a beautiful girlfriend of six years named Angela who is almost done with her medical school!',
        'I am bilingual in English and Korean and grew up in Korea for the first 10 years of my life.',
        'Angela and I adopted two kittens, Bella (black) and Minnie (tabby). Bella is an extremely smart and spicy girl who knows how to do tricks such as sit, paw, stand, and even learned to open doors all by herself!',
        'Minnie is a little clumsier but is equally adorable with her small nub of a tail and whole lot of affection. She instantly purrs when pet and loves exploring every nooks and crannies of the house!',
        'I broke my Tibia and Fibula during a highschool football match, and had to go through four surgeries to install a titanium rod inside of the bone. I am not attracted to magnets though, and can pass through airport metal detectors just fine!',
        "While I haven't attended a powerlifting meet yet, my unofficial numbers are currently 375/535/570 lbs for bench/squat/deadlift.",
        ]
    }
  }

  componentDidMount() {
    var $imgs = $('.ffimg');
    var $modal = $("#modal01");
    $modal.click(() => {
      $modal.css('display', 'none');
    })
    $imgs.each((index, img) => {
      let $img = $(img);
      $img.click(() => {
        let src = $img.attr('src');
        document.getElementById("modal-image").src = src;
        document.getElementById("modal-desc").innerHTML = this.state.description[index];
        document.getElementById("modal01").style.display = "block";
      })
    })
  }

  render() {
    return(
      <div id='funFacts' className='funFacts' style={{backgroundImage:"url(/space.jpg)"}}>
        <h1 className='ffTitle'>FUN FACTS</h1>
        <div className='ffContainer'>
        {
          this.state.images.map((img) => {
            let path = `/${img}`;
            return (
              <div className='card'>
                <img className='ffimg' src={path}/>
              </div>
            )
          })
        }
        </div>
        <div id="modal01" className="modal">
          <span className="close">&times;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div className="modal-content">
            <img id="modal-image"/>
            <div id='modal-desc'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FunFacts;

