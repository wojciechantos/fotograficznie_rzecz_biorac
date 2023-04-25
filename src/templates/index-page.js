import React from "react";
import { PageContainer } from "../components/PageContainer";
import Layout from "../components/Layout";

/*
 * Page sections import
 * */
import PageSections from "../pages/IndexPageContent";
const { HeroHeader, NewestEpisode, Episodes, BestOf, Blog } = PageSections;

const IndexPageTemplate = () => {
  return (
    <>
      <PageContainer>
        <HeroHeader />
        <NewestEpisode />
        <Episodes />
        <BestOf />
        <Blog />
      </PageContainer>
    </>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

const Modules = { IndexPage, IndexPageTemplate };

export default Modules;
