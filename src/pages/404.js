import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class FourOhFour extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Page not found – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <section>
            <header>
              <h1>404</h1>
            </header>
            <div className="tag-container">
              <p className="lead">
                The page you're looking for cannot be found.
              </p>
              <p>It has either been deleated or moved to a new location.</p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}
