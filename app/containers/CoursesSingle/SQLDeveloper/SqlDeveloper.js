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
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
    </>
  );
}
