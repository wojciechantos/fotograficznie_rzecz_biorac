import * as React from "react";
import { Helmet } from "react-helmet";
import { MantineProvider } from "@mantine/core";
import Footer from "../components/Footer";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { Link, withPrefix } from "gatsby";
import themeConfig from "./themeConfig";
import { useState } from "react";
import GlobalStyles from "./GlobalStyles";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [isActive, setIsActive] = useState(false);

  const toggleMobileMenu = () => {
    if (isActive) {
      setIsActive(false);
    } else setIsActive(true);
  };

  return (
    <div>
      <MantineProvider theme={themeConfig} withGlobalStyles withNormalizeCSS>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>
        <GlobalStyles />
        <MobileMenu isOpened={isActive} onClose={toggleMobileMenu} />
        <Navbar onBurgerClick={toggleMobileMenu} />
        {children}
        {/*<Footer />*/}
      </MantineProvider>
    </div>
  );
};

export default TemplateWrapper;
