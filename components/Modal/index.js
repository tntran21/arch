import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { Container } from "./styles"

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    const { children, className } = this.props;
    if (!this.props.isActive) {
      return null;
    } else {
      return (
        <Container className={`${className ? className : ""}`}>
          <div className="btn__close" onClick={this.onClose}>
            <FontAwesomeIcon icon="times"/>
          </div>
          <div className={`content `}>{children}</div>
        </Container>
      )
    }
   
  }
}

export default Modal;