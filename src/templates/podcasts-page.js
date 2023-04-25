import React from "react";
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
// import Features from "../components/Features";
// import Testimonials from "../components/Testimonials";
// import Pricing from "../components/Pricing";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
// import FullWidthImage from "../components/FullWidthImage";

import { PageContainer } from "../components/PageContainer";
import { SubpageHeader } from "../components/SubpageHeader";

const PodcastsPageTemplate = () => {
  return (
    <>
      <PageContainer>
        <SubpageHeader title="Podcasty" />
      </PageContainer>
    </>
  );
};

const PodcastsPage = () => {
  return (
    <Layout>
      <PodcastsPageTemplate />
    </Layout>
  );
};

const Modules = { PodcastsPage, PodcastsPageTemplate };

export default Modules;

// export const productPageQuery = graphql`
//   query ProductPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       frontmatter {
//         title
//         image
//         heading
//         description
//         intro {
//           blurbs {
//             image
//             text
//           }
//           heading
//           description
//         }
//         main {
//           heading
//           description
//           image1 {
//             alt
//             image
//           }
//           image2 {
//             alt
//             image
//           }
//           image3 {
//             alt
//             image
//           }
//         }
//         testimonials {
//           author
//           quote
//         }
//         full_image {
//           childImageSharp {
//             gatsbyImageData(quality: 100, layout: FULL_WIDTH)
//           }
//         }
//         pricing {
//           heading
//           description
//           plans {
//             description
//             items
//             plan
//             price
//           }
//         }
//       }
//     }
//   }
// `;
