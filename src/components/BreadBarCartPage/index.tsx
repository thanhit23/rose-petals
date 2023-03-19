import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';

import { BreadBarCartPageTypes } from './types';
import styles from './styles';
import messages from './messages';

function BreadBarCartPage({ activeIndexPage }: BreadBarCartPageTypes) {
  const handleActive = (index: number) => {
    if (index <= activeIndexPage) return styles.active;

    return styles.unActive;
  };

  return (
    <>
      <Link to="/cart">
        <Chip
          label={<FormattedMessage {...messages.cart} />}
          sx={{
            ...handleActive(1),
            ...styles.chipItem,
          }}
        />
      </Link>
      <Box
        className="bridge"
        sx={{
          ...styles.bridge,
          ...handleActive(2),
        }}
      />
      <Link to="/checkout">
        <Chip
          label={<FormattedMessage {...messages.detail} />}
          sx={{
            ...handleActive(2),
            ...styles.chipItem,
          }}
        />
      </Link>
      <Box
        sx={{
          ...styles.bridge,
          ...handleActive(3),
        }}
      />
      <Link to="/payment">
        <Chip
          label={<FormattedMessage {...messages.payment} />}
          sx={{
            ...handleActive(3),
            ...styles.chipItem,
          }}
        />
      </Link>
      <Box
        sx={{
          ...styles.bridge,
          ...handleActive(4),
        }}
      />
      <Chip
        disabled
        label={<FormattedMessage {...messages.review} />}
        sx={{
          ...handleActive(4),
          ...styles.chipItem,
        }}
      />
    </>
  );
}

export default BreadBarCartPage;
