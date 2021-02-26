import React from "react"
import { Container } from "./styles"

class ProjectItem extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { title, image, id } = this.props;
        return (
            <Container>
                <div className="item__content">
                    <div className="item__img">
                        <img src={image} alt={title}/>
                    </div>
                    
                    <div className="item-hover">
                        <div className="ttl">
                            {title}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default ProjectItem;