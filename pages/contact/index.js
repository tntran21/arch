import React from "react";
import { Container } from "assets/styles/pages/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TimelineLite } from 'gsap/all';
import { NextSeo } from "next-seo"
import SEO from "seo/contact"

const contactList = [
  {
    name: "Address",
    des: "Số 87, phố Văn Quán, Hà Đông, Hà Nội",
    icon: "map-marked-alt",
  },
  {
    name: "Call us",
    des: "097 367 61 28",
    icon: "phone-volume"
  },
  {
    name: "Mail us",
    des: "khuetran@gmail.com",
    icon: "envelope",
  }
]

class ContactPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.tl = new TimelineLite();
    this.listElm = [];
  }

  componentDidMount() {
    this.tl.staggerFrom(this.listElm, 0.5, { autoAlpha: 0, y: 200 }, 0.5)
  }

  render() {

    return (
      <Container>
        <NextSeo {...SEO}/>
        <div className="banner">
          <div className="inner">
            <div className="banner-content">
              <div className="icon">
                <div className="heart">
                  <FontAwesomeIcon icon="heart" />
                </div>
              </div>
              
              <div className="txt"><b>Thanks</b> for your attention</div>
            </div>
            
          </div>
         
        </div>
      
        <div className="contact">
          <div className="inner">
            <div className="line">Contact us</div>
              <div className="contact-list">
                {
                  contactList.map((item, index) => 
                    <div key={item.name} className="contact-item" ref={div => this.listElm[index] = div}>
                      <div className="icon">
                        <FontAwesomeIcon icon={item.icon}/>
                      </div>
                      <div className="ttl"><b>{item.name}</b></div>
                      <div className="txt">{item.des}</div>
                    </div>
                  )
                }
              </div>
          </div>
        </div>
      
        <div className="footer">Copyright © NganTran</div>
      </Container>
    )
  }
};

export default ContactPage;