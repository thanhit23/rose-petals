import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import _ from 'lodash';

import messages from './messages';
import styles from './styles';
import { PropsFilter } from './types';

const ratingList = [5, 4, 3, 2, 1];

function FilterPanel({ listBrand, setPrice = () => {}, setRating = () => {} }: PropsFilter) {
  const [arrayRating, setArrayRating] = useState<number[]>([]);
  const handlePriceChange = (e: { target: { name: any; value: any } }) => {
    setPrice(prev => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };
  const min = _.min(arrayRating) || 0;
  const max = _.max(arrayRating) || 0;

  useEffect(() => {
    if (arrayRating.length == 1) {
      setRating(prev => ({
        ...prev,
        ratingMin: 0,
        ratingMax: max,
      }));
    } else if (arrayRating.length > 1) {
      setRating(prev => ({
        ...prev,
        ratingMin: min,
        ratingMax: max,
      }));
    } else {
      setRating(prev => ({
        ...prev,
        ratingMin: 0,
        ratingMax: 0,
      }));
    }
  }, [arrayRating]);

  const handleRatingChange = (numberRating: number) => {
    setArrayRating(prev => {
      const isChecked = arrayRating.includes(numberRating);
      if (isChecked) {
        return arrayRating.filter(item => item !== numberRating);
      } else {
        return [...prev, numberRating];
      }
    });
  };

  return (
    <Grid item md={3}>
      <Paper sx={styles.wrapPaper}>
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.priceRange} />
        </Box>
        <Box sx={styles.boxQuantityPriceRange}>
          <TextField
            name="priceMin"
            id="outlined-basic"
            defaultValue={0}
            onChange={handlePriceChange}
            variant="outlined"
            size="small"
            sx={{ fontSize: '14px' }}
          />
          <Box component="h5" sx={styles.boxBridge}>
            -
          </Box>
          <TextField
            name="priceMax"
            id="outlined-basic"
            defaultValue={0}
            onChange={handlePriceChange}
            variant="outlined"
            size="small"
            sx={{ fontSize: '14px' }}
          />
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
            control={<Checkbox onChange={() => handleRatingChange(item)} color="default" size="small" />}
            label={<Rating name="read-only" value={item} readOnly size="small" />}
          />
        ))}
        <Divider sx={styles.dividerTwo} />
      </Paper>
    </Grid>
  );
}

export default FilterPanel;
