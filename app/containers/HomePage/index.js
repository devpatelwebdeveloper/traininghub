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
import TopBanner from '../../components/organisms/TopBanner/TopBanner';
import Tiles from '../../components/blocks/Tiles/Tiles';
import Clients from '../../components/blocks/Clients/Clients';
import BaseTitle from '../../components/atoms/BaseTitle/BaseTitle';
export default function HomePage() {
  const Toptitle = <FormattedMessage {...messages.title} />;
  const Subtitle = <FormattedMessage {...messages.subtitle} />;
  return (
    <>
      <TopBanner title={Toptitle} subtitle={Subtitle} />
      <Clients />
      <section>
        <BaseTitle title="Heading test" size="H1" center underline />
        <Container>
          <Tiles />
        </Container>
      </section>
    </>
  );
}
