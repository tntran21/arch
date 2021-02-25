import Link from 'next/link';
import Head from '../components/head';
import Header from "components/Header"
import { NextSeo } from "next-seo"
import SEO from "seo/home"

const Page = () => (
  <div className="main-container">
    <Header/>
    <NextSeo {...SEO}/>
    <div className="hero">
      <div className="row">
        
      </div>
    </div>
  </div>
);

export default Page;