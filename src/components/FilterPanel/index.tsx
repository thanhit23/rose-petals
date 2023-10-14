import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

import { Brand } from 'src/common/types';

import messages from './messages';
import styles from './styles';

const ratingList = [5, 4, 3, 2, 1];

type Props = {
  listBrand: Brand[];
};

function FilterPanel({ listBrand }: Props) {
  return (
    <Grid item md={3}>
      <Paper sx={styles.wrapPaper}>
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.priceRange} />
        </Box>
        <Box sx={styles.boxQuantityPriceRange}>
          <TextField id="outlined-basic" defaultValue={0} variant="outlined" size="small" sx={{ fontSize: '14px' }} />
          <Box component="h5" sx={styles.boxBridge}>
            -
          </Box>
          <TextField id="outlined-basic" defaultValue={250} variant="outlined" size="small" sx={{ fontSize: '14px' }} />
        </Box>
        <Divider sx={styles.dividerTwo} />
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.brands} />
        </Box>
        {listBrand.map(item => (
          <FormControlLabel
            key={item.name}
            sx={styles.flex}
            control={<Checkbox color="default" size="small" />}
            label={<Box sx={styles.labelFormControl}>{item.name}</Box>}
          />
        ))}

        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.ratings} />
        </Box>
        {ratingList.map((item, index) => (
          <FormControlLabel
            key={index}
            sx={styles.flex}
            control={<Checkbox color="default" size="small" />}
            label={<Rating name="read-only" value={item} readOnly size="small" />}
          />
        ))}
        <Divider sx={styles.dividerTwo} />
      </Paper>
    </Grid>
  );
}

export default FilterPanel;
