import React from 'react'
import App from 'next/app'
import { baseStyle, resetStyle } from "assets/styles/global-style"
import "assets/styles/index.scss"
import "fontawesome"
import "gsap"
import Layout from 'components/Layout'
export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, pathName: router.pathname }
  }


  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        {resetStyle}
        {baseStyle}
        <Layout pathName={this.props.pathName}>
          <Component {...pageProps} {...this.state}/>
        </Layout>
      </>
    )
  }
}