import { defineMessages } from 'react-intl';

export const scope = 'Layouts.Header.Search';

export default defineMessages({
  searchFor: {
    id: `${scope}.searchFor`,
    defaultMessage: 'Keyword',
  },
  placeholderSearch: {
    id: `${scope}.placeholderSearch`,
    defaultMessage: 'Searching for...',
  },
});
