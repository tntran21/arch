import React from "react";
import Detail from "mocks/detail-item"
import ItemDetail from "components/ItemDetail";
import DetailImage from "components/DetailImage";
import { Container } from "assets/styles/pages/detail"
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