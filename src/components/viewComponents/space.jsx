import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1`font-size: 5em`;

const Space = props => {
  return props.numberOfSpaces
    ? [...new Array(props.numberOfSpaces)].map(() => {
        return <H1>|</H1>;
      })
    : null;
};

Space.props = {
  numberOfSpaces: PropTypes.number.isRequired
};

export default Space;
