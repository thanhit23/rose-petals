import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { FormattedMessage } from 'react-intl';

import styles from './styles';
import messages from './messages';

function FrequentlyBoughtTogether() {
  return (
    <Box>
      <Box component="h3">
        <FormattedMessage {...messages.title} />
      </Box>
      <Box display="flex" flexWrap="wrap" margin="">
        <Paper sx={styles.boxBoughtTogether}>
          <Link to="/">
            <Box sx={styles.boxImgProduct}>
              <Box
                component="img"
                width="100%"
                src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F2.PremiumGroceryCollection.png&w=3840&q=75"
              />
            </Box>
            <Box component="span" sx={styles.boxNameProduct}>
              Premium Grocery Collection
            </Box>
            <Box display="flex" alignItems="center">
              <Box component="h6" sx={styles.boxPriceProduct}>
                $250.00
              </Box>
              <Box component="span" sx={styles.boxPriceOffProduct}>
                <del>$250.00</del>
              </Box>
            </Box>
          </Link>
        </Paper>
        <Box sx={styles.wrapAddIcon}>
          <Box component="h2" sx={styles.addIcon}>
            <AddIcon />
          </Box>
        </Box>
        <Paper sx={styles.boxBoughtTogether}>
          <Link to="/">
            <Box sx={styles.boxImgProduct}>
              <Box
                component="img"
                width="100%"
                src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F2.PremiumGroceryCollection.png&w=3840&q=75"
              />
            </Box>
            <Box component="span" sx={styles.boxNameProduct}>
              Premium Grocery Collection
            </Box>
            <Box display="flex" alignItems="center">
              <Box component="h6" sx={styles.boxPriceProduct}>
                $250.00
              </Box>
              <Box component="span" sx={styles.boxPriceOffProduct}>
                <del>$250.00</del>
              </Box>
            </Box>
          </Link>
        </Paper>
        <Box sx={styles.wrapIconDragHandle}>
          <Box component="h2" sx={styles.iconDragHandle}>
            <DragHandleIcon />
          </Box>
        </Box>
        <Box sx={styles.boxPayment}>
          <Box component="h2" sx={styles.boxPrice}>
            $2,500.00
          </Box>
          <Box component="span" sx={styles.boxPriceSave}>
            <FormattedMessage {...messages.save} /> $500.00
          </Box>
          <Box display="flex" gap="12px">
            <Button variant="contained" sx={styles.btnAdd}>
              <FormattedMessage {...messages.addToCart} />
            </Button>
            <Button variant="outlined" sx={styles.btnAdd}>
              <FormattedMessage {...messages.addToList} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FrequentlyBoughtTogether;
