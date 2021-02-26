import ProjectItem from "components/ItemProject";
import React from "react";
import StackGrid from "react-stack-grid";
import listData from "mocks/list-data"
import { Container } from "./styles"

class ProjectList extends React.PureComponent {
    componentDidMount() {
    }

    render() {
        return(
            <Container>
            <StackGrid
                    columnWidth={252}
                    monitorImagesLoaded={true}
                >
                    {
                        listData.data.map((item, index) => {
                            return <ProjectItem key={index} {...item} />
                            
                        })
                    }
                </StackGrid>
            </Container>
        )
    }
}

export default ProjectList;