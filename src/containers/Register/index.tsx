import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import HeaderAuth from 'src/components/HeaderAuth';
import RegisterPage from 'src/components/Register';

import styles from './styles';

function Register() {
  return (
    <>
      <HeaderAuth />
      <Box sx={styles.boxRegister}>
        <Paper sx={styles.paper}>
          <RegisterPage />
        </Paper>
      </Box>
    </>
  );
}

export const Component = Register;
