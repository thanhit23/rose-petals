import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import RegisterPage from 'src/components/Register';

import styles from './styles';

function Register() {
  return (
    <Box sx={styles.boxRegister}>
      <Paper sx={styles.paper}>
        <RegisterPage />
      </Paper>
    </Box>
  );
}

export const Component = Register;
