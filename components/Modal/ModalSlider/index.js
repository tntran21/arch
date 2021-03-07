import React, { useEffect, useState } from "react";
import Modal from "..";
import { Container } from "./styles";
import Carousel,  { consts } from 'react-elastic-carousel'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalSlider = ({isShow, selectedIndex, data, onClose}) => {

  const myArrow = ({ type, onClick, isEdge }) =>{
    const pointer = type === consts.PREV ? <FontAwesomeIcon icon="chevron-left" color="#fff" size="2x"/> : <FontAwesomeIcon icon="chevron-right" color="#fff" size="2x"/>
    return (
      <div className="cus__btn" onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    )
  }

  const showModal = (index) => {
    onClose && onClose(index);
  };

  return (
    <Container>
        <Modal className="dialog" onClose={showModal} isActive={isShow}>
          <Carousel
            itemsToShow={1}
            pagination={false}
            className="slider"
            renderArrow={myArrow}
            initialActiveIndex={selectedIndex}
          >
            {data.map((item, index) => <div className="dialog__img" key={index}><img src={item.src} alt={item.alt}/></div>)}
          </Carousel>
        </Modal>
    </Container>
  )
};

export default ModalSlider;