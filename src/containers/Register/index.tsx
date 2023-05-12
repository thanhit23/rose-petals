import RegisterPage from '../../components/Register';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

function Register() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgb(43, 52, 69)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          boxShadow: 'rgba(3, 0, 71, 0.09) 0px 8px 45px',
          overflow: 'hidden',
          borderRadius: '8px',
          width: '500px',
          padding: '2rem 3rem',
        }}
      >
        <RegisterPage />
      </Paper>
    </Box>
  );
}

export default Register;
