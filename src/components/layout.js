import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="/amaered.ico" />
      </Helmet>
  
      <div className="layout-container">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
