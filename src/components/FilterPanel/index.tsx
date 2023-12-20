import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { NumericFormat } from 'react-number-format';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import _ from 'lodash';

import messages from './messages';
import styles from './styles';

const ratingList = [5, 4, 3, 2, 1];

type PropsFilter = {
  listBrand: {
    _id: string;
    logo: string;
    name: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
  }[];
  price: { price_min: string; price_max: string };
  setPrice: React.Dispatch<
    React.SetStateAction<{
      price_min: string;
      price_max: string;
    }>
  >;
  setRating?: React.Dispatch<
    React.SetStateAction<{
      rating_min: number;
      rating_max: number;
    }>
  >;
  setBrand?: React.Dispatch<React.SetStateAction<string | null>>;
};

function FilterPanel({ listBrand, setRating = () => {}, price, setPrice, setBrand = () => {} }: PropsFilter) {
  const [arrayRating, setArrayRating] = useState<number[]>([]);
  const [arrayBrand, setArrayBrand] = useState<string>('');
  const min = _.min(arrayRating) || 0;
  const max = _.max(arrayRating) || 0;

  const handleBrandChange = (brandId: string) => {
    setArrayBrand(brandId);
    setBrand(brandId || null);
  };

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

  const removeExtraCharacters = (price: string) => price.replace(/,|đ/g, '');

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(prev => ({
      ...prev,
      [e.target.name]: removeExtraCharacters(e.target.value),
    }));
  };

  useEffect(() => {
    if (arrayRating.length == 1) {
      setRating(prev => ({
        ...prev,
        rating_min: 0,
        rating_max: max,
      }));
    } else if (arrayRating.length > 1) {
      setRating(prev => ({
        ...prev,
        rating_min: min,
        rating_max: max,
      }));
    } else {
      setRating(prev => ({
        ...prev,
        rating_min: 0,
        rating_max: 0,
      }));
    }
  }, [arrayRating]);

  return (
    <Grid item xs={12} lg={3}>
      <Paper sx={styles.wrapPaper}>
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.priceRange} />
        </Box>
        <Box sx={styles.boxQuantityPriceRange}>
          <NumericFormat
            name="price_min"
            value={price.price_min}
            customInput={TextField}
            thousandSeparator
            allowNegative={false}
            decimalScale={3}
            suffix={'đ'}
            size="small"
            onChange={handlePriceChange}
          />
          <Box component="h5" sx={styles.boxBridge}>
            -
          </Box>
          <NumericFormat
            name="price_max"
            value={price.price_max}
            customInput={TextField}
            thousandSeparator
            allowNegative={false}
            decimalScale={3}
            suffix={'đ'}
            size="small"
            onChange={handlePriceChange}
          />
        </Box>
        <Divider sx={styles.dividerTwo} />
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.brands} />
        </Box>
        {listBrand.map(item => (
          <FormControlLabel
            checked={item._id === arrayBrand}
            key={item.name}
            sx={styles.flex}
            onChange={() => handleBrandChange(item._id)}
            control={<Radio color="default" size="small" />}
            label={<Box sx={styles.labelFormControl}>{item.name}</Box>}
          />
        ))}
        <br />
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
