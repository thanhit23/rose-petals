import { defineMessages } from 'react-intl';

export const scope = 'Components.SortBar';

export default defineMessages({
  searchingFor: {
    id: `${scope}.searchingFor`,
    defaultMessage: 'Searching for ',
  },
  categories: {
    id: `${scope}.categories`,
    defaultMessage: 'Searching by category',
  },
  resultsFound: {
    id: `${scope}.resultsFound`,
    defaultMessage: 'results found',
  },
  view: {
    id: `${scope}.view`,
    defaultMessage: 'View:',
  },
});
