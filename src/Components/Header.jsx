/**
 * Header Component
 *
 * Sample of a single responsibility component
 */

import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subtitle }) => {
  return (
    <h1>
      Educator React Codespaces JS Template - {title} - {subtitle}
    </h1>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
