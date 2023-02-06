// noinspection GraphQLUnresolvedReference

import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { PageContainer } from "../components/PageContainer";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import { Display, Heading, Text } from "../components/Typography";
import { SectionWrapper } from "../components/SectionWrapper";
import { Flex, Image } from "@mantine/core";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  console.log(image);

  return (
    <PageContainer>
      <SectionWrapper>
        <Flex>
          <Flex direction="column">
            <Display color="brand">{title}</Display>
            <Heading level={2} color="brand">
              {heading}
            </Heading>
            <Text color="brand">{subheading}</Text>
            {/*<Text>{subheading}</Text>*/}
            <Text level={1}>{mainpitch.description}</Text>
            <Text color="brand">{mainpitch.title}</Text>
          </Flex>
          {/*<Flex>*/}
          <Image alt="hero-image" image={heroImage} style={{ width: "100%" }} />
          {/*</Flex>*/}
        </Flex>
      </SectionWrapper>
      <Features gridItems={intro.blurbs} />
      <div className="columns">
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/products">
            See all products
          </Link>
        </div>
      </div>
      <div className="column is-12">
        <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div>
      </div>
    </PageContainer>
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
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
