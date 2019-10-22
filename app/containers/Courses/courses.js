/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

export default function HomePage() {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <a href="test">Test</a>
      <Link to="/about">About</Link>
    </>
  );
}
