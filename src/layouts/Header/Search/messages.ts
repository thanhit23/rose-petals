import { defineMessages } from 'react-intl';

export const scope = 'Layouts.Header.Search';

export default defineMessages({
  keyword: {
    id: `${scope}.keyword`,
    defaultMessage: 'Keyword',
  },
  searchingFor: {
    id: `${scope}.searchingFor`,
    defaultMessage: 'Searching for...',
  },
});
