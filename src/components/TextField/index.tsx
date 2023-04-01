import { useIntl } from 'react-intl';

import { TextField as MuiTextField } from '@mui/material';

import styles from './styles';
import { MuiTextFieldType } from './types';
import messages from './messages';

function TextField({ label, message, sx = {}, validate = {}, type = 'text' }: MuiTextFieldType) {
  const intl = useIntl();
  const renderPlaceholder = () => {
    if (message) intl.formatMessage(message || messages.default);
    return '';
  };

  return (
    <MuiTextField
      fullWidth
      type={type}
      size="small"
      label={label}
      variant="outlined"
      placeholder={renderPlaceholder()}
      sx={{ ...styles.textField, ...sx }}
      {...validate}
    />
  );
}

export default TextField;
