import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

import { Nullable } from 'src/common/types';

import ErrorMessage from '../ErrorMessage';
import messages from './messages';
import styles from './styles';
import { ReviewSubmitForm, ReviewTypes } from './types';

function ProductReview({ onSubmit }: ReviewTypes) {
  const [value, setValue] = React.useState<Nullable<number>>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewSubmitForm>({
    mode: 'onChange',
  });

  const handleSubmitForm = (data: object) => {
    onSubmit(data);
  };

  const { review } = errors;

  return (
    <Box>
      <Box sx={styles.wrapReview}>
        <Box sx={styles.wrapInformationUser}>
          <Avatar src="https://bazar-react.vercel.app/assets/images/faces/7.png" sx={styles.avatar} />
          <Box marginLeft="16px">
            <Box component="h5" sx={styles.nameUser}>
              Jannie Schumm
            </Box>
            <Box display="flex" alignItems="center">
              <Rating value={4} readOnly={true} sx={{ fontSize: '1.25rem' }} />
              <Box component="h6" sx={styles.averageRating}>
                4.7
              </Box>
              <Box component="span" sx={styles.ratingTime}>
                2.2 years ago
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="p" sx={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida
          egestas ac account.
        </Box>
      </Box>
      <Box sx={styles.wrapReview}>
        <Box sx={styles.wrapInformationUser}>
          <Avatar src="https://bazar-react.vercel.app/assets/images/faces/7.png" sx={styles.avatar} />
          <Box marginLeft="16px">
            <Box component="h5" sx={styles.nameUser}>
              Jannie Schumm
            </Box>
            <Box display="flex" alignItems="center">
              <Rating value={4} readOnly={true} sx={{ fontSize: '1.25rem' }} />
              <Box component="h6" sx={styles.averageRating}>
                4.7
              </Box>
              <Box component="span" sx={styles.ratingTime}>
                2.2 years ago
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="p" sx={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida
          egestas ac account.
        </Box>
      </Box>
      <Box sx={styles.wrapReview}>
        <Box sx={styles.wrapInformationUser}>
          <Avatar src="https://bazar-react.vercel.app/assets/images/faces/7.png" sx={styles.avatar} />
          <Box marginLeft="16px">
            <Box component="h5" sx={styles.nameUser}>
              Jannie Schumm
            </Box>
            <Box display="flex" alignItems="center">
              <Rating value={4} readOnly={true} sx={{ fontSize: '1.25rem' }} />
              <Box component="h6" sx={styles.averageRating}>
                4.7
              </Box>
              <Box component="span" sx={styles.ratingTime}>
                2.2 years ago
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="p" sx={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida
          egestas ac account.
        </Box>
      </Box>
      <Box component="h2" sx={styles.titleReviewProduct}>
        <FormattedMessage {...messages.writeAReview} />
      </Box>
      <form onSubmit={handleSubmit(data => handleSubmitForm(data))}>
        <Box marginBottom="20px">
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
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
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
            autoFocus
            sx={{
              mt: 0,
              '& div > fieldset': {
                borderColor: () => review && '#e94560',
              },
            }}
            {...register('review')}
          />
          <ErrorMessage name={review} />
        </Box>
        <Button variant="contained" type="submit">
          <FormattedMessage {...messages.btnSubmit} />
        </Button>
      </form>
    </Box>
  );
}

export default ProductReview;
