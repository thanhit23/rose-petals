import React from 'react';
import { Link } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';

import styles from './styles';

type Props = {
  icon: JSX.Element;
  title: JSX.Element;
  button?: JSX.Element;
  path?: string;
  loadingButton?: boolean;
  onClickButton?: () => void;
};

const HeaderHoldUser: React.FC<Props> = ({
  icon,
  title,
  button,
  path = '#',
  loadingButton = false,
  onClickButton = () => {},
}) => (
  <Box sx={styles.containerTitle}>
    <Box sx={styles.wrapperTitle}>
      <Box sx={styles.boxTitle}>
        {icon}
        <Box component="h2" sx={styles.title}>
          {title}
        </Box>
      </Box>
      {button && (
        <Link to={path} onClick={onClickButton}>
          <LoadingButton loading={loadingButton} variant="contained" sx={styles.btnOrderAgain}>
            {button}
          </LoadingButton>
        </Link>
      )}
    </Box>
  </Box>
);

export default HeaderHoldUser;
