import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { PageContainer } from "../../components/PageContainer";
import { SubpageHeader } from "../../components/SubpageHeader";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageContainer>
          <SubpageHeader title="Blog" />
          <BlogRoll />
        </PageContainer>
      </Layout>
    );
  }
}
