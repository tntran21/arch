import React from "react"
import Link from "next/link"
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
                <Link href={`/projects/${id}`}>
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
                </Link>
            </Container>
        )
    }
}

export default ProjectItem;