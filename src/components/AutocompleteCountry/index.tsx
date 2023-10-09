import { HTMLAttributes } from 'react';
import { FormattedMessage } from 'react-intl';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import messages from './messages';
import styles from './styles';
import { CountryType } from './types';

function AutocompleteCountry() {
  const allCountry: readonly CountryType[] = [{ label: 'Viet Nam', code: 'VN' }];

  const urlFlag = 'https://flagcdn.com';

  const renderOptions = (props: HTMLAttributes<HTMLLIElement>, { label, code }: CountryType) => (
    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
      <img
        loading="lazy"
        width="20"
        src={`${urlFlag}/w20/${code.toLowerCase()}.png`}
        srcSet={`${urlFlag}/w40/${code.toLowerCase()}.png 2x`}
        alt=""
      />
      {label} ({code})
    </Box>
  );

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label={<FormattedMessage {...messages.labelCountry} />}
      size="small"
      sx={styles.textFieldCountry}
    />
  );

  return (
    <FormControl fullWidth sx={styles.formControl}>
      <Autocomplete
        fullWidth
        size="small"
        defaultValue={{ label: 'Viet Nam', code: 'VN' }}
        options={allCountry}
        autoHighlight
        getOptionLabel={({ label }) => label}
        renderOption={(props, option) => renderOptions(props, option)}
        renderInput={params => renderInput(params)}
      />
    </FormControl>
  );
}

export default AutocompleteCountry;
