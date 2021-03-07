import React from 'react';
import { NextSeo } from "next-seo";
import SEO from "seo/home";
import { Container } from "assets/styles/pages/home";
import Link from 'next/link';
import { CONTACT_PATH, PROJECT_PATH } from 'utils/constants/pathname';
import {gsap, TimelineLite } from 'gsap';

const logo = "/static/images/logo.jpg";
class HomePage extends React.PureComponent {
  constructor(props){
    super(props);
    this.txt1 = null;
    this.txt2 = null;
    this.txt3 = null;
    this.header = null;
    this.txtLogo = null;
    this.tl = new TimelineLite();
  }

  componentDidMount() {
    this.tl
      .from(this.txt1, 0.8, { opacity: 0, visibility: "hidden",  y: "-400"})
      .to(this.txt1, 0.8, { opacity: 1, visibility: "inherit", y: 0})
      .from(this.txt2, 1, { autoAlpha: 0, x: -100 }, "-=.3")
      .from(this.txt3, 1.2, {autoAlpha: 0, y: 200 }, "-=.5")
      .from(this.header, .8, { autoAlpha: 0, y: -100, clipPath: "inset(0% 100% 0% 0%)"}, "-=1")
      .from(this.txtLogo, 1, { autoAlpha: 0, right: "-10%"}, "-=1")
  }


  render() {
    return(
      <Container>
        <NextSeo {...SEO}/>
        <section className="section section-1">
          <div className="header">
            <div className="header-inner" ref={div => this.header = div}>
              <div className="logo">
                <img src={logo} alt="logo architect house"/>
              </div>
              <Link href={PROJECT_PATH}>
                <a className="nav">Go To Projects</a>
              </Link>
              <span className="comma">|</span>
              <Link href={CONTACT_PATH}>
                <a className="nav">Contact</a>
              </Link>
            </div>
            
          </div>

          <div className="content">
            <div className="txt-1" ref={div => this.txt1 = div}>BUILDING CONCEPT & DESIGN</div>
            <div className="txt-2" ref={div => this.txt2 = div}>
              Creative, innovate <br/> and simple
            </div>
            <div className="txt-3" ref={div => this.txt3 = div}>New York, USA</div>

            <div className="txt-logo"  ref={div => this.txtLogo = div}>Archhouse</div>
          </div>
        </section>
      </Container>
    );
  }
}

export default HomePage;