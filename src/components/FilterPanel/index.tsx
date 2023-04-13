import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import styles from './styles';
import messages from './messages';

function FilterPanel() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleToggleDropdown = () => setOpenDropdown(!openDropdown);

  return (
    <Grid item md={3}>
      <Paper sx={styles.wrapPaper}>
        <Box component="h6" sx={styles.boxTitleCategory}>
          <FormattedMessage {...messages.categories} />
        </Box>
        <Box
          sx={{
            ...styles.wrapDropdownCategoryItem,
            height: () => (openDropdown ? '143px' : '33px'),
          }}
        >
          <Box sx={styles.boxDropdownCategoryItem} onClick={handleToggleDropdown}>
            <Box component="span" sx={styles.boxBathPreparations}>
              Bath Preparations
            </Box>
            <ChevronRightIcon fontSize="small" />
          </Box>
          <Box component="p" sx={styles.boxBathPreparationsItem}>
            Bubble Bath
          </Box>
          <Box component="p" sx={styles.boxBathPreparationsItem}>
            Bath Capsules
          </Box>
          <Box component="p" sx={styles.boxBathPreparationsItem}>
            Others
          </Box>
        </Box>
        <Box component="p" sx={styles.boxCategoryItem}>
          Eye Makeup Preparations
        </Box>
        <Box component="p" sx={styles.boxCategoryItem}>
          Fragrance
        </Box>
        <Box component="p" sx={styles.boxCategoryItem}>
          Hair Preparations
        </Box>
        <Divider sx={styles.divider} />
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
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Macc</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Karts</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Baals</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Bukks</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Luasis</Box>}
        />
        <Divider sx={styles.dividerTwo} />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>On Sale</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>In Stock</Box>}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Box sx={styles.labelFormControl}>Featured</Box>}
        />
        <Divider sx={styles.dividerTwo} />
        <Box component="h6" sx={styles.boxPriceRange}>
          <FormattedMessage {...messages.ratings} />
        </Box>
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Rating name="read-only" value={5} readOnly size="small" />}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Rating name="read-only" value={4} readOnly size="small" />}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Rating name="read-only" value={3} readOnly size="small" />}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Rating name="read-only" value={2} readOnly size="small" />}
        />
        <FormControlLabel
          sx={styles.flex}
          control={<Checkbox color="default" size="small" />}
          label={<Rating name="read-only" value={1} readOnly size="small" />}
        />
        <Divider sx={styles.dividerTwo} />
        <Box component="h6" sx={styles.boxPriceRange}>
          Colors
        </Box>
        <Box sx={styles.wrapColors}>
          <Box sx={{ ...styles.colors, ...styles.bg_black }} />
          <Box sx={{ ...styles.colors, ...styles.bg_pink }} />
          <Box sx={{ ...styles.colors, ...styles.bg_yellow }} />
          <Box sx={{ ...styles.colors, ...styles.bg_light_green }} />
          <Box sx={{ ...styles.colors, ...styles.bg_blue }} />
          <Box sx={{ ...styles.colors, ...styles.bg_purple_blood }} />
        </Box>
      </Paper>
    </Grid>
  );
}

export default FilterPanel;
