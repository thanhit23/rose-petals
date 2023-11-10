import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams, useSearchParams } from 'react-router-dom';

import { Apps, ViewList } from '@mui/icons-material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import messages from './messages';
import styles from './styles';

type Props = {
  changeView: (isView: boolean) => void;
  viewList: boolean;
};

const SortBar: React.FC<Props> = ({ changeView, viewList }) => {
  const { slug = '' } = useParams();

  const [searchParams] = useSearchParams();

  const categoryName = searchParams.get('category');

  return (
    <Paper sx={styles.paperSortBar}>
      <Box>
        <Box component="h5" sx={styles.boxKeywordSearch}>
          <FormattedMessage {...messages[categoryName ? 'categories' : 'searchingFor']} />
          {categoryName ? ` "${categoryName}"` : ` “${slug}”`}
        </Box>
        <Box component="p" sx={styles.boxQuantityResult}>
          47 <FormattedMessage {...messages.resultsFound} />
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
