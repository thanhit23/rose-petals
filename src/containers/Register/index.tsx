import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';

import styles from './styles';
import RegisterPage from '../../components/Register';

function Register() {
  return (
    <Box sx={styles.boxRegister}>
      <Paper sx={styles.paper}>
        <RegisterPage />
      </Paper>
    </Box>
  );
}

export default Register;
