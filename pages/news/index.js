import React from "react";
import ProjectList from "components/ProjectList"
import dynamic from "next/dynamic"
import { NextSeo } from "next-seo"
import SEO from "seo/news"

const DynamicComponent = dynamic(() => import('components/ProjectList'))
class NewsPage extends React.PureComponent {
  render() {
    return(
      <>
        <NextSeo {...SEO}/>
        <DynamicComponent />
      </>
    )
  }
}

export default NewsPage;