import React from 'react'
import App from 'next/app'
import { baseStyle, resetStyle } from "assets/styles/global-style"
import "assets/styles/index.scss"
import "fontawesome"
import Layout from 'components/Layout'
import { gsap, TimelineLite } from "gsap";

gsap.registerPlugin(TimelineLite);
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, pathName: router.pathname }
  }

  componentDidMount() {
    // console.log(this.props.pathName)
  }


  render () {
    const { Component, pageProps, pathName } = this.props

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