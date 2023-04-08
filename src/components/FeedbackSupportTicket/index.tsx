import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

import styles from './styles';
import messages from './messages';
import ErrorMessage from '../ErrorMessage';

export interface SubmitForm {
  message: string;
}

function FeedbackSupportTicket() {
  const loginValidationSchema = Yup.object().shape({
    message: Yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const { message } = errors;

  const handleSubmitForm = (data: object) => {
    console.log(data);
  };
  return (
    <>
      <Box sx={styles.boxFeedback}>
        <Avatar src="https://bazar-react.vercel.app/assets/images/faces/face-7.jpg" />
        <Box>
          <Box component="h5" sx={styles.boxNameUser}>
            Esther Howard
          </Box>
          <Box component="span" sx={styles.boxDateFeedback}>
            03:39:PM | 14 Dec 2020
          </Box>
          <Box sx={styles.boxContentFeedback}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum velit amet, aliquam massa tellus. Condimentum
            sit at pharetra, congue. Sit mattis amet nec pharetra odio. Interdum lorem vestibulum et amet et duis
            placerat. Ac mattis massa duis mi tellus sed. Mus eget in fames urna, ornare nunc, tincidunt tincidunt
            interdum. Amet aliquet pharetra rhoncus scelerisque pulvinar dictumst at sit. Neque tempor tellus ac nullam.
            Etiam massa tempor eu risus fusce aliquam.
          </Box>
        </Box>
      </Box>
      <form onSubmit={handleSubmit(data => handleSubmitForm(data))}>
        <TextField
          id="outlined-multiline-static"
          placeholder="Write your message here..."
          multiline
          rows={4}
          size="small"
          sx={styles.boxWriteContentFeedback}
          {...register('message')}
        />
        <ErrorMessage name={message} />
        <Button type="submit" variant="contained" sx={styles.btnPostMessage}>
          <FormattedMessage {...messages.postMessage} />
        </Button>
      </form>
    </>
  );
}

export default FeedbackSupportTicket;
