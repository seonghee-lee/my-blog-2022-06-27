import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage alt="image1" src="../images/img1.jpg" />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
