import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar, Box, IconButton, Rating } from '@mui/material';

import { covertDate } from 'src/helpers';

import FormComment from '../FormComment';
import ModalDelete from '../ModalDelete';
import { ProductReviewType } from '../ProductReview/types';
import styles from './styles';

interface Props {
  data: ProductReviewType;
  setIdComment: React.Dispatch<React.SetStateAction<string>>;
  idComment: string;
  onDeleteComment: (id: string) => void;
  onUpdateComment: (data: object) => void;
  idUser: string;
}

const initialState = {
  _id: '',
  content: '',
  createAt: '',
  product: {
    _id: '',
    name: '',
    thumbnail: '',
  },
  rating: 0,
  updateAt: '',
  user: {
    _id: '',
    name: '',
  },
};

function CommentItem({ data, onDeleteComment, idComment, setIdComment, onUpdateComment, idUser }: Props) {
  const [formData, setFormData] = useState<ProductReviewType>(initialState);
  const [openForm, setOpenForm] = useState(false);
  const [modalDeleteComment, setModalDeleteComment] = useState(false);

  const handleDelete = () => onDeleteComment(idComment);

  const handleFormEdit = (item: ProductReviewType) => {
    if (item) {
      setIdComment(item._id);
      setFormData(item);
    }
  };

  const handleModalDelete = (id: string) => {
    setModalDeleteComment(true);
    setIdComment(id);
  };

  const handleSubmitUpdate = (data: object) => {
    setOpenForm(false);
    onUpdateComment(data);
  };
  return (
    <Box sx={{ margin: '10px 0', borderBottom: '1px solid #e8e8e8' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={styles.wrapReview}>
          <Box sx={styles.wrapInformationUser}>
            <Avatar src="https://bazar-react.vercel.app/assets/images/faces/7.png" sx={styles.avatar} />
            <Box marginLeft="16px">
              <Box component="h5" sx={styles.nameUser}>
                {data.user.name}
              </Box>
              <Box display="flex" alignItems="center" gap="0 5px">
                <Rating value={data.rating} readOnly={true} sx={{ fontSize: '1.25rem' }} />
                <Box component="span" sx={styles.ratingTime}>
                  {covertDate(data.createAt)}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box component="p" sx={styles.comment}>
            {data.content}
          </Box>
        </Box>
        {idUser === data.user._id && (
          <Box>
            <IconButton
              onClick={() => {
                setOpenForm(!openForm);
                handleFormEdit(data);
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => handleModalDelete(data._id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
      </Box>
      <Box sx={{ height: openForm ? 'auto' : 0, overflow: 'hidden' }}>
        <FormComment onSubmit={handleSubmitUpdate} formData={formData} />
      </Box>

      <ModalDelete
        content="Delete this Comment"
        openModal={modalDeleteComment}
        handleCloseModal={() => setModalDeleteComment(false)}
        onDelete={() => handleDelete()}
      />
    </Box>
  );
}
export default CommentItem;
