import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseTile from '../../atoms/BaseTile/BaseTile';

const CardType = styled.div`
  border-radius: 3px;
  background-color: #fff;
  background-color: #fff;

  border: 1px solid #d8d8d8;
  border-bottom-width: 2px;
  width: 100%;
  min-width: 300px;
  padding: 8px;
  margin-bottom: 3%;
`;

const ImgC = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-top: 75.09%;
`;
const ClearLine = styled.div`
  width: 100%;
  height: 20px;
`;

export default class EnhancedTiles extends React.PureComponent {
  render() {
    return (
      <CardType>
        <ImgC>
          <BaseTile image={this.props.image} alt={this.props.alt} />
        </ImgC>
        <ClearLine />
        <h4>{this.props.title}</h4>
        <p>{this.props.text}</p>
      </CardType>
    );
  }
}

EnhancedTiles.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
