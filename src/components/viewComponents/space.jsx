import PropTypes from "prop-types";
import React from "react";
import {StyledH1} from '../styles';

const Space = props => {
  return props.numberOfSpaces
    ? [...new Array(props.numberOfSpaces)].map(() => {
        return <StyledH1>|</StyledH1>;
      })
    : null;
};

Space.props = {
  numberOfSpaces: PropTypes.number.isRequired
};

export default Space;
