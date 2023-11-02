import { SyntheticEvent } from 'react';
import { Controller } from 'react-hook-form';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import styles from './styles';
import { AddressCheckout, Props } from './types';

function AutoCompleteAddress({ label, data, setValue, validate, onClear, onChange, name, sx }: Props) {
  const allOption: readonly AddressCheckout[] = data;

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField {...params} label={label} size="small" sx={styles.textFieldCountry} />
  );

  const handleOnchange = (e: SyntheticEvent, value?: any, reason?: string) => {
    onChange && onChange(e, value);
    setValue(value, reason);
  };

  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          sx={sx}
          fullWidth
          size="small"
          options={allOption}
          autoHighlight
          onChange={(event, value, reason) => {
            field.onChange(value);
            handleOnchange(event, value, reason);
          }}
          inputValue={field.value ? (typeof field.value === 'object' ? field.value.name : field.value) : ''}
          getOptionLabel={({ name }) => name}
          renderInput={params => renderInput(params)}
          onInputChange={(_, __, reason) => {
            if (reason === 'clear') {
              onClear && onClear();
            }
          }}
        />
      )}
      name={name}
      control={validate}
    />
  );
}

export default AutoCompleteAddress;
