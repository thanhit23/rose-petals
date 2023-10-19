import { useIntl } from 'react-intl';

import { TextField as MuiTextField } from '@mui/material';

import messages from './messages';
import styles from './styles';
import { MuiTextFieldType } from './types';

function TextField({ message, sx = {}, validate = {}, type = 'text', ...props }: MuiTextFieldType) {
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
      variant="outlined"
      placeholder={renderPlaceholder()}
      sx={{ ...styles.textField, ...sx }}
      {...validate}
      {...props}
    />
  );
}

export default TextField;
