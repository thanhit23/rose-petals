import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';

import { Apps, ViewList } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import messages from './messages';
import styles from './styles';

type Props = {
  changeView: (isView: boolean) => void;
  viewList: boolean;
  numberProduct: number;
};

const SortBar: React.FC<Props> = ({ changeView, viewList, numberProduct }) => {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get('categoryName');
  const searchValue = searchParams.get('q');

  return (
    <Paper sx={styles.paperSortBar}>
      <Box>
        <Box component="h5" sx={styles.boxKeywordSearch}>
          <FormattedMessage {...messages[categoryName ? 'categories' : 'searchingFor']} />
          <Box component={'span'}>
            &nbsp;&quot;{categoryName ? decodeURIComponent(categoryName) : searchValue}&quot;
          </Box>
        </Box>
        <Box component="p" sx={styles.boxQuantityResult}>
          {numberProduct} <FormattedMessage {...messages.resultsFound} />
        </Box>
      </Box>
      <Box sx={styles.boxOptionSort}>
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
