import React from "react";
import { Container } from "./styles";
import Detail from "mocks/detail-item"
import ItemDetail from "components/ItemDetail";
import DetailImage from "components/DetailImage";


class ProjectDetailPage extends React.PureComponent {

  render() {
    
    return (
      <Container>
        <ItemDetail {...Detail}/>
        <DetailImage {...Detail}/>
      </Container>
    )
  }
}

export default ProjectDetailPage;