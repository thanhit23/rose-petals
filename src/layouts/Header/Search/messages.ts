import { defineMessages } from 'react-intl';

export const scope = 'Layouts.Header.Search';

export default defineMessages({
  searchFor: {
    id: `${scope}.searchFor`,
    defaultMessage: 'Keyword',
  },
  searchingFor: {
    id: `${scope}.searchingFor`,
    defaultMessage: 'Searching for...',
  },
});
