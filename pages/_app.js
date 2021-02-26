import React from 'react'
import App from 'next/app'
import { baseStyle, resetStyle } from "assets/styles/global-style"
import "assets/styles/index.scss"
import "fontawesome"

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  state = {
    name: "Morgan",
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <>
        {resetStyle}
        {baseStyle}
        <Component {...pageProps} {...this.state}/>
      </>
    )
  }
}