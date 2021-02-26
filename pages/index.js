import Link from 'next/link';
import Head from '../components/head';
import Header from "components/Header"
import ProjectList from "components/ProjectList"
import { NextSeo } from "next-seo"
import SEO from "seo/home"

const Page = () => (
  <div className="main-container">
    <Header/>
    <NextSeo {...SEO}/>
    <div className="hero">
      <ProjectList />
    </div>
  </div>
);

export default Page;