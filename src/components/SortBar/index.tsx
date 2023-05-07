import React from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import { Apps, ViewList } from '@mui/icons-material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import styles from './styles';
import messages from './messages';

function SortBar({ changeView, viewList }: { changeView: (isView: boolean) => void; viewList: boolean }) {
  const { slug = '' } = useParams();
  const [age, setAge] = React.useState('Relevance');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Paper sx={styles.paperSortBar}>
      <Box>
        <Box component="h5" sx={styles.boxKeywordSearch}>
          <FormattedMessage {...messages.searchingFor} />“ {slug} ”
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
}

export default SortBar;
