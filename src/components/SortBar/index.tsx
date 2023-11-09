import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams, useSearchParams } from 'react-router-dom';

import { Apps, ViewList } from '@mui/icons-material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import messages from './messages';
import styles from './styles';

type Props = {
  changeView: (isView: boolean) => void;
  viewList: boolean;
};

const SortBar: React.FC<Props> = ({ changeView, viewList }) => {
  const { slug = '' } = useParams();
  const [searchParams] = useSearchParams();
  const [age, setAge] = React.useState('Relevance');

  const categoryName = searchParams.get('category');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Paper sx={styles.paperSortBar}>
      <Box>
        <Box component="h5" sx={styles.boxKeywordSearch}>
          <FormattedMessage {...messages[categoryName ? 'categories' : 'searchingFor']} />
          {categoryName ? ` "${categoryName}"` : ` “${slug}”`}
        </Box>
        <Box component="p" sx={styles.boxQuantityResult}>
          48 <FormattedMessage {...messages.resultsFound} />
        </Box>
      </Box>
      <Box sx={styles.boxOptionSort}>
        <Box sx={styles.wrapperShortBy}>
          <Box component="p" sx={styles.boxShortBy}>
            <FormattedMessage {...messages.shortBy} />
          </Box>
          <FormControl sx={styles.formControl} fullWidth>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              size="small"
              inputProps={{ 'aria-label': 'Without label' }}
              sx={styles.selectOption}
            >
              <MenuItem value="Relevance">
                <FormattedMessage {...messages.relevance} />
              </MenuItem>
              <MenuItem value="Date">
                <FormattedMessage {...messages.date} />
              </MenuItem>
              <MenuItem value="Price Low to High">
                <FormattedMessage {...messages.priceLowToHigh} />
              </MenuItem>
              <MenuItem value="Price High to Low">
                <FormattedMessage {...messages.priceHighToLow} />
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={styles.wrapperView}>
          <Box component="p" sx={styles.boxView}>
            <FormattedMessage {...messages.view} />
          </Box>
          <IconButton aria-label="apps" onClick={() => changeView(false)}>
            <Apps fontSize="small" sx={{ color: () => (!viewList ? '#D23F57' : '') }} />
          </IconButton>
          <IconButton aria-label="view-list" onClick={() => changeView(true)}>
            <ViewList fontSize="small" sx={{ color: () => (viewList ? '#D23F57' : '') }} />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default SortBar;
