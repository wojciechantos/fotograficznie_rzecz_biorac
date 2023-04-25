import React from "react";
import { pageData } from "../pages/AboutPageContent/pageData";
import { PageContainer } from "../components/PageContainer";
import { SubpageHeader } from "../components/SubpageHeader";

import Layout from "../components/Layout";

// eslint-disable-next-line
export const AboutPageTemplate = () => {
  const { header } = pageData;

  return (
    <>
      <PageContainer>
        <SubpageHeader title={header} />
      </PageContainer>
    </>
  );
};

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageTemplate />
    </Layout>
  );
};

export default AboutPage;
