import React, { Component, PureComponent } from 'react';
import Header from 'components/Header';
import Head from 'next/head';
import { HOME_PATH } from 'utils/constants/pathname';
import Router from 'next/router';

import { Container } from "./styles";
class Layout extends PureComponent {
  state = {
    pathName: this.props.pathName
  }

  componentDidUpdate() {
    this.setState({
      pathName: Router.pathname
    })
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
          pathName !== HOME_PATH && (
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