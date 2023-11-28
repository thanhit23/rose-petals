import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import 'react-slideshow-image/dist/styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { Box, FormControl, OutlinedInput, Rating } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import * as Yup from 'yup';

import { Nullable } from 'src/common/types';
import ErrorMessage from 'src/components/ErrorMessage';
import { OrderDetailProduct } from 'src/containers/Order/types';

import messages from '../messages';
import styles from './styles';

type Props = {
  product: OrderDetailProduct;
  openModal: boolean;
  handleCloseModal: () => void;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
};

const ReviewProductQuickView: React.FC<Props> = ({ product, openModal, handleCloseModal, onReviewProduct }) => {
  const [rating, setRating] = useState<Nullable<number>>(0);
  const handleClose = () => handleCloseModal();

  const reviewSchema = Yup.object().shape({
    content: Yup.string().required('Please write something'),
  });

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(reviewSchema),
    defaultValues: {
      content: '',
    },
  });

  const { content } = errors;

  const useOutlinedInputStyles = makeStyles(() => ({
    root: {
      '&:hover > fieldset': {
        borderColor: '#D23F57 !important',
      },
    },
    focused: {
      '& > fieldset': {
        borderColor: '#D23F57 !important',
        borderWidth: '1px !important',
      },
    },
  }));

  const outlinedInputClasses = useOutlinedInputStyles();

  const onSubmitForm = (data: object) => {
    onReviewProduct.mutate(
      { product: product.product._id, rating, ...data },
      {
        onSuccess: ({ data: { status, message } }) => {
          if (status) {
            toast.success(<FormattedMessage {...messages.createCommentMessage} />);
            handleClose();
            setRating(0);
            reset();
          } else {
            toast.error(
              <>
                <FormattedMessage {...messages.reviewProductFailed} />: {message}
              </>,
            );
          }
        },
      },
    );
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxWrapperModal}>
          <Box>
            <Grid container>
              <Box style={{ marginBottom: '20px' }}>
                <Box component="h1" sx={styles.boxTitle}>
                  <FormattedMessage {...messages.boxReviewTitle} />
                </Box>
                <Box sx={styles.wrapRating}>
                  <Box component="h5" sx={styles.boxYourRating}>
                    <FormattedMessage {...messages.yourRating} />
                  </Box>
                  <Box component="h5" sx={styles.boxRequired}>
                    *
                  </Box>
                </Box>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Box>
              <Box component={'form'} noValidate sx={{ width: '100%' }} onSubmit={handleSubmit(onSubmitForm)}>
                <Box sx={styles.wrapRating}>
                  <Box component="h5" sx={styles.boxYourReview}>
                    <FormattedMessage {...messages.yourReview} />
                  </Box>
                  <Box component="h5" sx={styles.boxRequired}>
                    *
                  </Box>
                </Box>
                <FormControl fullWidth style={{ position: 'relative' }}>
                  <OutlinedInput
                    {...register('content')}
                    classes={outlinedInputClasses}
                    sx={styles.outlineInput}
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    placeholder="Please write something..."
                  />
                  <ErrorMessage name={content} />
                </FormControl>
                <Box sx={styles.boxControlBtn}>
                  <Button variant="outlined" sx={styles.boxCancelReview} onClick={handleClose}>
                    <FormattedMessage {...messages.btnCancelReview} />
                  </Button>
                  <LoadingButton
                    loading={onReviewProduct.isLoading}
                    type="submit"
                    variant="contained"
                    sx={styles.boxReviewBtn}
                  >
                    <FormattedMessage {...messages.btnReview} />
                  </LoadingButton>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Button sx={styles.btnClose} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewProductQuickView;
