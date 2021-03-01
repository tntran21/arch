import ProjectList from "components/ProjectList";
import React from "react";
import StackGrid from "react-stack-grid";
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
          {/* <StackGrid
            columnWidth={252}
            monitorImagesLoaded={true}
          > */}
            {
              images.map((item, index) => 
                <div className="images__item" key={index}>
                  <img src={item.src} alt={item.alt}/>
                </div>
              )
            }
          {/* </StackGrid> */}
        </div>
      </Container>
    )
  }
}

export default DetailImage;