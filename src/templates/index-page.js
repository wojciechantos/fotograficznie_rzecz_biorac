// noinspection GraphQLUnresolvedReference
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { PageContainer } from "../components/PageContainer";
import Layout from "../components/Layout";
import Footer from "../containers/Footer";
import BlogRoll from "../components/BlogRoll";

/*
 * Page sections import
 * */
import {
  HeroHeader,
  NewestEpisode,
  Episodes,
} from "../templates/indexPageContent";

// eslint-disable-next-line
export const IndexPageTemplate = (
  {
    // image,
    // title,
    // heading,
    // subheading,
    // mainpitch,
    // description,
    // intro,
  }
) => {
  return (
    <>
      <PageContainer>
        <HeroHeader />
        <NewestEpisode />
        <Episodes />

        {/*<Features gridItems={intro.blurbs} />*/}
        {/*<div className="columns">*/}
        {/*  <div className="column is-12 has-text-centered">*/}
        {/*    <Link className="btn" to="/products">*/}
        {/*      See all products*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="column is-12">*/}
        {/*  <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>*/}
        {/*  <BlogRoll />*/}
        {/*  <div className="column is-12 has-text-centered">*/}
        {/*    <Link className="btn" to="/blog">*/}
        {/*      Read more*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </PageContainer>
      <Footer />
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
      }
    }
  }
`;
