import React from "react";
import { Container } from "./styles";

class DetailImage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    return(
      <Container>
        <div className="images">
          {
            images.map((item, index) => 
              <div className="images__item" key={index}>
                <img src={item.src} alt={item.alt}/>
              </div>
            )
          }
        </div>
      </Container>
    )
  }
}

export default DetailImage;