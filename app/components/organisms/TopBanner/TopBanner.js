import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Backgroundimage = 'https://unsplash.it/1500?random';

const StyledContainer = styled.section`
  background-image: url(${Backgroundimage});
  background-size: cover;
  background-position: center;
  width: 100wh;
  height: 50vh;
  display: flex;

  overflow: hidden;
`;

const CenterContent = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  & h1,
  h3 {
    color: white;
    line-height: 1;
  }

  & h1 {
    text-transform: uppercase;
    font-size: 3em;
    margin-bottom: 0;
    text-align: center;
  }
  & h3 {
    margin-bottom: 40px;
    font-size: 1.5em;
    font-weight: normal;
  }
`;

export default class TopBanner extends React.PureComponent {
  render() {
    return (
      <StyledContainer>
        <CenterContent>
          <h1>{this.props.title}</h1>
          <h3>{this.props.subtitle}</h3>
        </CenterContent>
      </StyledContainer>
    );
  }
}

TopBanner.propTypes = {
  title: PropTypes.any.isRequired,
  subtitle: PropTypes.any.isRequired,
};
