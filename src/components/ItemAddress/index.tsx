import * as React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit } from '@mui/icons-material';

import styles from './styles';
import { Props } from './types';

function ItemAddress({ listAddress }: Props) {
  return (
    <>
      {listAddress.map(({ id, address, addressLine, phoneNumber }, i) => (
        <Paper key={i} sx={styles.paperItemAddress}>
          <Typography sx={styles.address}>{address}</Typography>
          <Typography sx={styles.addressDetail}>{addressLine}</Typography>
          <Typography sx={styles.phoneNumber}>{phoneNumber}</Typography>
          <Typography sx={styles.actions}>
            <Link to={`/address/${id}`}>
              <IconButton size="medium">
                <Edit fontSize="small" />
              </IconButton>
            </Link>
            <IconButton size="medium">
              <Delete fontSize="small" />
            </IconButton>
          </Typography>
        </Paper>
      ))}
    </>
  );
}

export default ItemAddress;
