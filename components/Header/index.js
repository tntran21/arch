import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from "./styles"
import Link from 'next/link'
import { HOME_PATH, NEWS_PATH, PROJECT_PATH, CONTACT_PATH } from 'utils/constants/pathname'

const logo = "/static/images/logo.jpg"

class Header extends React.Component {
  state = {
    isShowMenu: false,
  }
  listMenu = [
    {
      path: PROJECT_PATH,
      name: "Projects"
    },
    {
      path: NEWS_PATH,
      name: "News"
    },
    {
      path: CONTACT_PATH,
      name: "Contact"
    },
  ]

  handleBarIcon = () => {
    this.setState({
      isShowMenu: !this.state.isShowMenu
    })
  }

  handleCloseNav = () => {
    this.setState({
      isShowMenu: false,
    })
  }

  render() {
    const { isShowMenu } = this.state;
    return (
      <Container className="header">
        <div className="header__container">
          <div className="icon__menu" onClick={this.handleBarIcon}>
            <FontAwesomeIcon icon={!isShowMenu ? "bars" : "times"}/>
          </div>
          <div className="header__left">
            <Link href={HOME_PATH}>
              <div className="header__logo">
                <img src={logo} alt="logo"/>
              </div>
            </Link>

            <div className={`nav ${isShowMenu ? "active" : ""}`}>
              {
                this.listMenu.map((item, index) =>
                  <div key={index} className="nav__item">
                    <Link href={item.path} >
                      <a>
                        <span onClick={this.handleCloseNav}>{item.name}</span>
                      </a>
                    </Link>
                  </div>
                )
              }
            </div>
          </div>
          <div className="header__right">
            <a className="social__item" href="#" target="_blank">
              <div>
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </div>
              
            </a>
            <a className="social__item" href="#" target="_blank">
              <FontAwesomeIcon icon="envelope" />
            </a>
            
          </div>
        </div>
      </Container>
    )
  }
}

export default Header