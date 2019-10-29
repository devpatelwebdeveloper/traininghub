import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class BaseTitle extends React.PureComponent {
  render() {
    return (
      <p>
        {this.props.size}
        {this.props.title}
      </p>
    );
  }
}

BaseTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
