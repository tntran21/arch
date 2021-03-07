import React from "react";
import ProjectList from "components/ProjectList";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import SEO from "seo/project";

const DynamicComponent = dynamic(() => import('components/ProjectList'))

class ProjectPage extends React.PureComponent {
  render() {
    return(
      <>
        <NextSeo {...SEO}/>
        <DynamicComponent />
      </>
    )
  }
}

export default ProjectPage;