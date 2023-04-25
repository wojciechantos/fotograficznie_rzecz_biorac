import React from "react";
import { Display } from "../Typography";
import { SectionWrapper } from "../SectionWrapper";
import { useStyles } from "./useStyles";
import PropTypes from "prop-types";

export const SubpageHeader = ({ title }) => {
  const {
    classes: { sectionWrapper },
  } = useStyles();

  return (
    <SectionWrapper className={sectionWrapper}>
      <Display color="grey">{title}</Display>
    </SectionWrapper>
  );
};

SubpageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
