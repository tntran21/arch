import React from 'react'
import { Container } from "./styles"

const logo = "/static/images/logo.jpg"

class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <div className="header__container">
          <div className="header__logo">
            <img src={logo} alt="logo"/>
          </div>

          <div className="nav">
            <div className="nav__item">Project</div>
            <div className="nav__item">About</div>
            <div className="nav__item">News</div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Header