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
  shortBy: {
    id: `${scope}.shortBy`,
    defaultMessage: 'Short by:',
  },
  relevance: {
    id: `${scope}.relevance`,
    defaultMessage: 'Relevance',
  },
  priceLowToHigh: {
    id: `${scope}.priceLowToHigh`,
    defaultMessage: 'Price Low to High',
  },
  date: {
    id: `${scope}.date`,
    defaultMessage: 'Date',
  },
  priceHighToLow: {
    id: `${scope}.priceHighToLow`,
    defaultMessage: 'Price High to Low',
  },
  view: {
    id: `${scope}.view`,
    defaultMessage: 'View:',
  },
});
