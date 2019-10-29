import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EnhancedTiles from '../../molecules/EnhancedTiles/EnhancedTiles';

export default function TilesBlock() {
  const tiles = [
    {
      image:
        'https://brainstation.io/Content/images/v3/home/digital-learning-1@2x.jpg',
      alt: 'alt',
      title: 'Title',
      text: 'text',
    },
    {
      image:
        'https://brainstation.io/Content/images/v3/home/digital-learning-1@2x.jpg',
      alt: 'alt',
      title: 'Title',
      text: 'text',
    },
    {
      image:
        'https://brainstation.io/Content/images/v3/home/digital-learning-1@2x.jpg',
      alt: 'alt',
      title: 'Title',
      text: 'text',
    },
    {
      image:
        'https://brainstation.io/Content/images/v3/home/digital-learning-1@2x.jpg',
      alt: 'alt',
      title: 'Title',
      text: 'text',
    },
  ];
  return (
    <Row>
      {tiles.map(tile => (
        <Col md={4} sm={12}>
          <EnhancedTiles
            image={tile.image}
            alt={tile.alt}
            title={tile.title}
            text={tile.text}
          />
        </Col>
      ))}
    </Row>
  );
}
