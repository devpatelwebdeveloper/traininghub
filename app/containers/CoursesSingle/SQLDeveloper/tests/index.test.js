import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import CoursePage from '../courses';

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <CoursePage />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
