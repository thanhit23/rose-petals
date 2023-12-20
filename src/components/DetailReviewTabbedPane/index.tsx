import React from 'react';
import { FormattedMessage } from 'react-intl';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Description from '../ProductDescription';
import Review from '../ProductReview';
import { ProductReviewType } from '../ProductReview/types';
import TabPanel from '../TabPanelProduct';
import messages from './messages';
import styles from './styles';

type Props = {
  listProductReview: ProductReviewType[];
  totalPage: number;
  onCreateComment: (data: object) => void;
  onUpdateComment: (data: object) => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isFetching: boolean;
  onDeleteComment: (id: string) => void;
  idComment: string;
  page: number;
  setIdComment: React.Dispatch<React.SetStateAction<string>>;
};

const DetailReviewTabbedPane: React.FC<Props> = ({
  isFetching,
  listProductReview,
  onCreateComment,
  onUpdateComment,
  totalPage,
  page,
  setPage,
  idComment,
  setIdComment,
  onDeleteComment,
}) => {
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
        <Tab label={<FormattedMessage {...messages.description} />} sx={styles.tabItem} {...a11yProps(0)} />
        <Tab label={<FormattedMessage {...messages.reviews} />} sx={styles.tabItem} {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Review
          isFetching={isFetching}
          setPage={setPage}
          listProductReview={listProductReview}
          totalPage={totalPage}
          onCreateComment={onCreateComment}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
          idComment={idComment}
          page={page}
          setIdComment={setIdComment}
        />
      </TabPanel>
    </>
  );
};

export default DetailReviewTabbedPane;
