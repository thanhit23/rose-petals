import React from 'react';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Description from '../ProductDescription';
import Review from '../ProductReview';
import TabPanel from '../TabPanelProduct';
import styles from './styles';
import { DetailReviewTabbedPaneType } from './types';

function DetailReviewTabbedPane({ handleSubmitReview }: DetailReviewTabbedPaneType) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <>
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
    </>
  );
}

export default DetailReviewTabbedPane;
