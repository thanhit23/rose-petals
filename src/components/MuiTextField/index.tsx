import { useIntl } from 'react-intl';

import TextField from '@mui/material/TextField';

import styles from './styles';
import { MuiTextFieldType } from './types';

function MuiTextField({ label, message, sx = {}, validate = {}, type = 'text' }: MuiTextFieldType) {
  const intl = useIntl();
  const placeholder = intl.formatMessage(message || { id: '', defaultMessage: '' });

  return (
    <TextField
      fullWidth
      type={type}
      size="small"
      label={label}
      variant="outlined"
      placeholder={placeholder}
      sx={{ ...styles.textField, ...sx }}
      {...validate}
    />
  );
}

export default MuiTextField;
