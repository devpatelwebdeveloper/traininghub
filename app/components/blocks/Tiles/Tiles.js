import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EnhancedTiles from '../../molecules/EnhancedTiles/EnhancedTiles';

export default function TilesBlock() {
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

const tiles = [
  {
    image:
      'https://brainstation.io/Content/images/v3/home/digital-learning-1@2x.jpg',
    alt: 'Full-Spectrum Digital Skills',
    title: 'Full-Spectrum Digital Skills',
    text:
      'Premium skills training across the entire digital product lifecycle: data, design, development, marketing, and product management.',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/home/digital-learning-2@2x.jpg',
    alt: 'Designed by Industry Experts',
    title: 'Designed by Industry Experts',
    text:
      'Agile curriculum developed and updated with industry leaders from the most innovative companies.',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/home/digital-learning-3@2x.jpg',
    alt: 'Available Online or In-Person',
    title: 'Available Online or In-Person',
    text:
      'Cutting-edge, instructor-led digital skills training, online or at state-of-the-art campuses around the world.',
  },
];
