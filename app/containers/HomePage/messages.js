/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'This is the HomePage',
  },
  subtitle: {
    id: `${scope}.subtitle`,
    defaultMessage: 'This is the Subtitle',
  },
});
