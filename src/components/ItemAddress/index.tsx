import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Delete, Edit } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ModalDelete from '../ModalDelete';
import styles from './styles';
import { Address, InforDelete } from './types';

type Props = {
  listAddress: Address[];
};

function ItemAddress({ listAddress }: Props) {
  const [modalProductDetail, setModalProductDetail] = useState(false);
  const [selectData, setSelectData] = useState({ id: '', address: '' });

  const handleOpenModalDelete = (dataDelete: InforDelete) => {
    setSelectData(dataDelete);
    setModalProductDetail(true);
  };

  const handleCloseModal = () => setModalProductDetail(false);
  const handleDelete = (id: string) => {
    console.log(id, 'handle delete');
  };

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
      <ModalDelete
        content={selectData.address}
        openModal={modalProductDetail}
        handleCloseModal={handleCloseModal}
        onDelete={() => handleDelete(selectData.id)}
      />
    </>
  );
}

export default ItemAddress;
