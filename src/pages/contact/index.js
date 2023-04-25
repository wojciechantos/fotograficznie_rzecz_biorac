import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { PageContainer } from "../../components/PageContainer";
import { SubpageHeader } from "../../components/SubpageHeader";
import { AppButton } from "../../components/Buttons";
import { Flex } from "@mantine/core";
import { ContactSection } from "../../containers/Contact";
import { Text } from "../../components/Typography";
import { contactPageData } from "../ContactPageContent/pageData";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    const {
      pageTitle,
      form: {
        namePlaceholder,
        emailPlaceholder,
        writeSomethingPlaceholder,
        agreementDescription,
        submitButton,
      },
    } = contactPageData;

    return (
      <Layout>
        <PageContainer>
          <SubpageHeader title={pageTitle} />

          <ContactSection>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                    placeholder={namePlaceholder}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                    placeholder={emailPlaceholder}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <textarea
                    className="textarea"
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                    placeholder={writeSomethingPlaceholder}
                  />
                </div>
                <Text mt="xl" mb={40} color="helper">
                  {agreementDescription}
                </Text>
              </div>

              <Flex w="100%" justify="center">
                <AppButton variant="creamy" type="submit" size="large">
                  {submitButton}
                </AppButton>
              </Flex>
            </form>
          </ContactSection>
        </PageContainer>
      </Layout>
    );
  }
}
