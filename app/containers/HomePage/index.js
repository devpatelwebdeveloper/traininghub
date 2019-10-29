/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import messages from './messages';
import BaseLink from '../../components/atoms/BaseLink/BaseLink';
import BaseTile from '../../components/atoms/BaseTile/BaseTile';
import EnhancedTiles from '../../components/molecules/EnhancedTiles/EnhancedTiles';
import Tiles from '../../components/blocks/Tiles/Tiles';
export default function HomePage() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Col>
      </Row>
      <Tiles />
    </Container>
  );
}
