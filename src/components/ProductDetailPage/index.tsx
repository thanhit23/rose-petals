import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';

import Review from './Review';
import TabPanel from './TabPanel';
import LayoutMain from '../LayoutMain';
import Description from './Description';
import ProductBriefing from '../ProductBriefing';
import AvailableAtShop from '../AvailableAtShop';
import RelatedProducts from '../RelatedProducts';
import FrequentlyBoughtTogether from '../FrequentlyBoughtTogether';

import styles from './styles';

function ProductDetailPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const handleSubmitReview = (data: object) => {
    console.log(data);
  };

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={styles.containerProductDetail}>
        <ProductBriefing />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="primary"
          sx={styles.tab}
        >
          <Tab label="Description" sx={styles.tabItem} {...a11yProps(0)} />
          <Tab label="Review" sx={styles.tabItem} {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Description />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Review onSubmit={handleSubmitReview} />
        </TabPanel>
        <FrequentlyBoughtTogether />
        <AvailableAtShop />
        <RelatedProducts />
      </Container>
    </LayoutMain>
  );
}

export default ProductDetailPage;
