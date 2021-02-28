import React, { Component } from 'react';
import Header from 'components/Header';

class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
      </div>
    );
  }
}

export default Layout;