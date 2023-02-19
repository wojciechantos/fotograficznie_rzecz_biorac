import React from "react";
import { PageContainer } from "../components/PageContainer";
import Layout from "../components/Layout";

/*
 * Page sections import
 * */
import {
  HeroHeader,
  NewestEpisode,
  Episodes,
  BestOf,
  Blog,
} from "../templates/indexPageContent";

export const IndexPageTemplate = () => {
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

export default IndexPage;
