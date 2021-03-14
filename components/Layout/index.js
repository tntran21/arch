import React, { Component, PureComponent } from 'react';
import Header from 'components/Header';
import Head from 'next/head';
import { HOME_PATH, LANDINGPAGE_PATH } from 'utils/constants/pathname';
import Router from 'next/router';

import { Container } from "./styles";
class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pathName: this.props.pathName
    }
  }
  showHeader = this.props.pathName === HOME_PATH || this.props.pathName === LANDINGPAGE_PATH ? false : true;
  

  
  componentDidUpdate() {
    this.setState({
      pathName: Router.pathname
    });
    this.showHeader = Router.pathname === HOME_PATH || Router.pathname === LANDINGPAGE_PATH ? false : true;
  }

  render () {
    const { children } = this.props;
    const { pathName } = this.state;

    return (
      <Container className='layout'>
        <Head>
          <link rel="shortcut icon" href="/static/images/logo.jpg" />
        </Head>
        {
          this.showHeader && (
            <Header />
          )
        }
        <div className="container">
          {children}
        </div>
      </Container>
    );
  }
}

export default Layout;