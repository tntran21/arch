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

    // Sesion1
    this.tl1 = gsap.timeline();
    this.bgS1 = React.createRef();
  };
  isCheckScroll = false;

  componentDidMount() {
    // Handle logo
    this.tlLogo.from(this.lgT1, 1, { autoAlpha: 0, x: -100 }).from(this.lgT2, 1, { autoAlpha: 0, x: 100 }, "-=1");
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleShowLogo);

      
      // this.tl1.to(this.bgS1, 1, { backgroundImage: `url(${sesion1[0].bgI})`});
      this.handleSection1();
    }

    
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
  handleSection1 = () => {
    let curentImageIndex = 0;
    const elm = this.bgS1.current;
    const els = document.querySelectorAll(".section-1 > .sec-bg");

    setInterval(() => {
      elm.style.animation = null;
      elm.style.backgroundImage = `url(${sesion1[curentImageIndex].bgI})`;
      curentImageIndex++;
      elm.style.animation = "bgMove 20s"
      if (curentImageIndex >= sesion1.length) curentImageIndex = 0;

  

    }, 3000)
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
   
            <div className="nav-logo logo-l" ref={div => this.logo1 = div}>
              <div className="txt1" ref={div => this.lgT1 = div}>A<span className="txt-small">rch</span></div>
              <div className="txt2" ref={div => this.lgT2 = div}>H<span className="txt-small">ouse</span></div>
            </div>
            <div className="nav-logo logo-2" ref={div => this.logo2 = div}><span>A</span><span>H</span></div>

        </div>
        
        <section className="section section-1 start" ref={this.bgS1} style={{backgroundImage: `url(${sesion1[0].bgI})`}}>
          {
            sesion1.map((item, i) => 
              <div className={`sec-bg sec${i + 1}-bg`} style={{backgroundImage: `url(${item.bgI})`, animation: "bgMove 20s", display: "none"}}></div>
            )
          }
        </section>

        <section className="section section-2">
          hello
        </section>
      </Container>
    )
  }
}

export default LandingPage;