import React from 'react';
import PropTypes from 'prop-types';

export default function SectionHeader({ children }) {
  return (
    <h1 className="my-4">{children}
    </h1>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.node,
};

SectionHeader.defaultProps = {
  children: null,
};
