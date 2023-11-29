import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useSearchParams } from 'react-router-dom';

import { Box, Rating } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Nullable } from 'src/common/types';

import ErrorMessage from '../ErrorMessage';
import { ProductReviewType, ReviewSubmitForm } from '../ProductReview/types';
import messages from './messages';
import styles from './styles';

export default function FormComment({
  onSubmit,
  formData,
}: {
  onSubmit: (data: object) => void;
  formData?: ProductReviewType;
}) {
  const [rating, setRating] = React.useState<Nullable<number>>(0);
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('id') as string;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ReviewSubmitForm>({
    mode: 'onChange',
  });
  useEffect(() => {
    if (formData) {
      setRating(formData.rating);
      setValue('content', formData.content);
    }
  }, [formData]);
  const handleSubmitForm = (data: object) => {
    formData ? onSubmit({ ...data, rating: rating }) : onSubmit({ ...data, rating: rating, product: productId });
    reset();
    setRating(0);
  };
  const { content } = errors;
  return (
    <form style={{ marginBottom: '20px' }} onSubmit={handleSubmit(data => handleSubmitForm(data))}>
      <Box sx={{ marginBottom: '20px' }}>
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
      <Box marginBottom="20px">
        <Box sx={styles.wrapRating}>
          <Box component="h5" sx={styles.boxYourReview}>
            <FormattedMessage {...messages.yourReview} />
          </Box>
          <Box component="h5" sx={styles.boxRequired}>
            *
          </Box>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          rows={8}
          id="review"
          // autoFocus
          sx={{
            mt: 0,
            '& div > fieldset': {
              borderColor: () => content && '#e94560',
            },
          }}
          {...register('content')}
        />
        <ErrorMessage name={content} />
      </Box>
      <Button variant="contained" type="submit" sx={styles.btnSubmit}>
        <FormattedMessage {...messages.btnSubmit} />
      </Button>
    </form>
  );
}
