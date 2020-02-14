import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import PageListing from "../components/PageListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";

export default class Index extends Component {
  render() {
    const { data } = this.props;

    const latestPostEdges = data.latest.edges;
    const popularPostEdges = data.popular.edges;
    const pageEdges = data.pages.edges;

    return (
      <Layout>
        <Helmet title={`Homepage – ${config.siteTitle}`} />
        <SEO />
        <div className="container content-container">
          <h1>Homepage</h1>
          <section className="section">
            <h2>Latest Articles</h2>
            <PostListing simple postEdges={latestPostEdges} />
            <Link to="/blog" className="view-all">
              View all
            </Link>
          </section>

          {/* <section className="section">
            <h2>
              Pages
            </h2>
            <PageListing pageEdges={pageEdges} />
          </section> */}
          <hr/>

          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
            <Link to="/categories/popular" className="view-all">
              View all
            </Link>
          </section>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
    pages: allMarkdownRemark(
      limit: 6
      filter: { frontmatter: { template: { eq: "page" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            date
            template
          }
        }
      }
    }
  }
`;
