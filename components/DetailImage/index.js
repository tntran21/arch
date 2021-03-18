import Modal from "components/Modal";
import React, { useEffect } from "react";
import { Container } from "./styles";
import Carousel,  { consts } from 'react-elastic-carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextSeo } from "next-seo";
class DetailImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      show: false,
      isTest: 1,
    }
  }

  SEO = {
    title: this.props.title,
    description: this.props.description,
    canonical: this.props.src,
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
    },
  }

  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <FontAwesomeIcon icon="chevron-left" color="#fff" size="2x"/> : <FontAwesomeIcon icon="chevron-right" color="#fff" size="2x"/>
    return (
      <div className="cus__btn" onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    )
  }

  showModal = (index) => {
    this.setState({selected: index, show: true})
  };


  onClose = e => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { images } = this.props;
    const { selected } = this.state;
    
    return(
      <Container>
        <NextSeo {...this.SEO}/>
        <div className="images">
            {
              images.map((item, index) => 
                <div className="images__item" key={index} onClick={() => this.showModal(index)}>
                  <img src={item.src} alt={item.alt}/>
                </div>
              )
            }
        </div>

        <Modal className="dialog" onClose={this.onClose} isActive={this.state.show}>
            <div className="dialog__content">
              <div className="dialog__content--left">
                <Carousel 
                  itemsToShow={1}
                  pagination={false}
                  className="slider"
                  renderArrow={this.myArrow}
                  initialActiveIndex={this.state.selected}
                  
                >
                  {images.map((item, index) => <div className="dialog__img" key={index}><img src={item.src} alt={item.alt}/></div>)}
                </Carousel>
              </div>
              <div className="dialog__content--right">
                <div className="recomment-ttl">Recommended Products</div>
                <div className="recomment-list">

                {images.map((item, index) => index <=1 && <div className="recomment-item" key={index}><img src={item.src} alt={item.alt}/></div>)}
                </div>
              </div>
            </div>
            
        
        </Modal>
      </Container>
    )
  }
}

export default DetailImage;