import React from "react";
import { Container } from "./styles";

class ItemDetail extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, description, detail } = this.props;

    return (
      <Container>
        <div className="ttl">
          {title}
        </div>
        <ul className="detail">
          <li className="detail__item">- <span>Đơn vị thiết kế:</span> {detail.author}</li>
          <li className="detail__item">- <span>Diện tích:</span> {detail.area}</li>
          <li className="detail__item">- <span>Tình trạng:</span> {detail.status}</li>
          <li className="detail__item">- <span>Địa điểm:</span> {detail.place}</li>
        </ul>

        <div className="description">{description}</div>
      </Container>
    )
  }
}

export default ItemDetail;