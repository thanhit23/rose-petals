import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Delete, Edit } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ShowModalDeleteMyAddress from '../ShowModalDeleteMyAddress';
import styles from './styles';
import { DataModalDelete, Props } from './types';

function ItemAddress({ listAddress }: Props) {
  const [modalProductDetail, setModalProductDetail] = useState(false);
  const [selectData, setSelectData] = useState({ id: '', address: '' });

  const handleOpenModalDelete = (dataDelete: DataModalDelete) => {
    setSelectData(dataDelete);
    setModalProductDetail(true);
  };

  const handleCloseModal = () => setModalProductDetail(false);

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
            <IconButton size="medium" onClick={() => handleOpenModalDelete({ id, address })}>
              <Delete fontSize="small" />
            </IconButton>
          </Typography>
        </Paper>
      ))}
      <ShowModalDeleteMyAddress
        openModal={modalProductDetail}
        handleCloseModal={handleCloseModal}
        selectDataDelete={selectData}
      />
    </>
  );
}

export default ItemAddress;
