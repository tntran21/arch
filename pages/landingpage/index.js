import React, { PureComponent } from "react";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container } from  "./styles";
import gsap from "gsap/dist/gsap";

const sesion1 = [
  {
    bgI: "/static/images/landingpage/bgS1-1.jpg",
    alt: "hahaha"
  },
  {
    bgI: "/static/images/landingpage/bgS1-2.jpg",
    alt: "hahaha"
  },
  {
    bgI: "/static/images/landingpage/bgS1-3.jpg",
    alt: "hahaha"
  },
  {
    bgI: "/static/images/landingpage/bgS1-4.jpg",
    alt: "hahaha"
  },
  {
    bgI: "/static/images/landingpage/bgS1-5.jpg",
    alt: "hahaha"
  },
]

class LandingPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      winPosY: 0,
      flagScroll: false,
    }

    // Logo header
    this.tlLogo = gsap.timeline();
    this.logo1 = React.createRef();
    this.logo2 = React.createRef();
    this.lgT1 = React.createRef();
    this.lgT1 = React.createRef();
    this.sliderTL = gsap.timeline({repeat: -1});


    // Section 1
    this.tl1 = gsap.timeline();
    this.bgS1 = React.createRef();
    this.sec1T = null;
    this.sec1LD = [];
    this.sec2S = null;

    // Section 2
    this.tl2 = gsap.timeline();
    this.sec2Test = null;
  };
  isCheckScroll = false;

  componentDidMount() {
    // Handle logo
    this.tlLogo.from(this.lgT1, 1, { autoAlpha: 0, x: -100 }).from(this.lgT2, 1, { autoAlpha: 0, x: 100 }, "-=1");
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
      window.addEventListener("scroll", this.handleShowLogo);
      this.handleSection1();
    }

    // Section 1
    this.tl1.staggerFrom(this.sec1LD, .7, { autoAlpha: 0, y: 100 }, .2)
    this.tl1.from(this.sec1T, .7, { autoAlpha: 0, y: 50 }).from(this.sec2S, 1, { autoAlpha: 0, x: "50%"}, "-=.9");

    // Section 2
    this.tl2.to(".content-ttl", { y: 50, scrollTrigger: {
      trigger: ".section-2",
      start: "top top",
      end: "bottom bottom",
      pin: ".content-ttl",
      pinSpacing: false,
      scrub: true,
    }}, "+=.2")
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleShowLogo);
    clearInterval(this.handleSection1)
  };

  // Handle scroll change logo header
  handleShowLogo = () => {
    const posY = window.pageYOffset;
    if (posY > 250) {
      // Hide logo 1
      if (!this.isCheckScroll) {
        this.tlLogo.to(this.logo1, 1, { autoAlpha: 0, scale: 0.2, }).to(this.logo2, .5, { autoAlpha: 1 }, "-=.5").to(this.logo2, .2, { color: "#000" }, "-=.1");
      }
      this.isCheckScroll = true;
      
    } else {
      if (this.isCheckScroll) {
        this.tlLogo.to(this.logo2, .5, { autoAlpha: 0, color: "#fff" }).to(this.logo1, .5, { autoAlpha: 1, scale: 1 }, "-=.2")
      }
      this.isCheckScroll = false;
    }
  };

  // Section1
  handleSection1 = (type) => {
    let curentImageIndex = 0;
    const els = document.querySelectorAll(".section-1 > .section-bg > .sec-bg");

     // mini slider
     const slides = document.querySelectorAll(".sec-slider-item");
     slides.forEach(slide => {
       this.sliderTL
         .from(slide, 1, { opacity: 0, transform: "translate(90%, 90%)" })
         .to(slide, 1, { opacity: 1, transform: "translate(0%, 0%)"}, "+=4")
     });

    setInterval(() => {
      els.forEach(el => {
        el.style.transition = "all 1s ease-out 0s";
        el.style.opacity = 0;
        el.style.visibility = "hidden";
        el.firstElementChild.style.animation = "none"
      });
      els[curentImageIndex].style.transition = "all 1s ease-out 0s";
      els[curentImageIndex].style.opacity = 1;
      els[curentImageIndex].style.visibility = "inherit";
      els[curentImageIndex].style.animation = "bgMove1 18s";
     
      curentImageIndex++;
      if (curentImageIndex >= sesion1.length) curentImageIndex = 0;
    }, 6000);

   
  }


  render() {
    return (
      <Container className="container">
        <div className="nav">
          <div className="nav-list">
            <div className="nav-item">Projects</div>
            <div className="nav-item">News</div>
            <div className="nav-item">Contact</div>
          </div>
   
            <div className="nav-logo logo-1" ref={div => this.logo1 = div}>
              <div className="txt1" ref={div => this.lgT1 = div}>A<span className="txt-small">rch</span></div>
              <div className="txt2" ref={div => this.lgT2 = div}>H<span className="txt-small">ouse</span></div>
            </div>
            <div className="nav-logo logo-2" ref={div => this.logo2 = div}><span>A</span><span>H</span></div>

        </div>
        <section className="section section-1" ref={this.bgS1} >
          <div className="section-bg">
            {
              sesion1.map((item, i) => 
                <div className={`sec-bg sec${i + 1}-bg`} key={i}>
                  <img src={item.bgI} alt={item.alt}/>
                </div>
              )
            }
          </div>

          <div className="wrap">
            <div className="wrap-content">
              <div className="content1">
                <div className="content1-left" ref={div => this.sec1T = div}>
                  Arch House <br/>is an interior design company
                </div>
                <div className="slider1" ref={div => this.sec2S = div}>
                  <div className="slider1-content">
                    {
                      sesion1.map((item, i) => 
                        <div className={`sec-slider-item`} key={i}>
                          <img src={item.bgI} alt={item.alt}/>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>

              <div className="content2">
                <div className="content2-box">
                  <div className="content2-item" ref={div => this.sec1LD[0] = div}>Gunnar is a Reykjavik based photographer, storyteller and creative entrepreneur. He was born in Denmark by
                     Icelandic parents and in 2014, he decided to quit his corporate job to satisfy his desire for adventure.</div>
                  <div className="content2-item" ref={div => this.sec1LD[1] = div}>Gunnar is a Reykjavik based photographer, storyteller and creative entrepreneur. He was born in Denmark by
                     Icelandic parents and in 2014, he decided to quit his corporate job to satisfy his desire for adventure.</div>
                </div>
                
              </div>
            </div>
            
          </div>
         
          

          
        </section>

        <section className="section section-2">
          <div className="content">
            <img src="/static/images/landingpage/DJI_0502-Pano.jpg" />
          </div>
          <div className="content-ttl" ref={div => this.sec2Test = div}>Sometimes you will never know the value of a moment until it becomes a memory.</div>
            
        </section>
        <section class="section blue" style={{background: 'blue'}}>
          <h1>Intro 1</h1>
        </section>
        <section class="section pink" style={{background: 'pink'}}>
          <h1>Hero 2</h1>
        </section>
      </Container>
    )
  }
}

export default LandingPage;