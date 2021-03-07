import React from "react";
import ProjectList from "components/ProjectList"
import { NextSeo } from "next-seo"
import SEO from "seo/project"

class ProjectPage extends React.PureComponent {
  render() {
    return(
      <>
        <NextSeo {...SEO}/>
        <ProjectList />
      </>
    )
  }
}

export default ProjectPage;