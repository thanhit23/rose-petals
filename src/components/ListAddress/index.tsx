import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Delete, Edit, Place } from '@mui/icons-material';

import styles from './styles';
import { Props } from './types';
import messages from './messages';
import HeaderHoldUser from '../HeaderHoldUser';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

function ListAddress({ listAddress }: Props) {
  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path="/address/add"
        icon={<Place fontSize="medium" />}
        title={<FormattedMessage {...messages.title} />}
        button={<FormattedMessage {...messages.btnAddAddress} />}
      />
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
      <Box sx={styles.boxPagination}>
        <Pagination count={5} variant="outlined" color="primary" />
      </Box>
    </Grid>
  );
}

export default ListAddress;
