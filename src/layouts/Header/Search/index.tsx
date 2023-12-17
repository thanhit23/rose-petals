import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import StoreIcon from '@mui/icons-material/Store';
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import Tippy from '@tippyjs/react/headless';

import useDebounce from 'src/hooks/useDebounce';
import { PATH_PUBLIC } from 'src/routes/paths';

import CategoryMenu from '../CategoryMenu';
import messages from './messages';
import { getSearchResult } from './service';
import styles from './styles';
import { Product, SubmitForm } from './types';

export default function Search() {
  const t = useIntl();
  const inputRef = useRef();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState('');

  const debouncedValue = useDebounce(searchValue, 700);

  const handleHideResult = () => setShowResult(false);

  const useOutlinedInputStyles = makeStyles(() => ({
    root: {
      '&:hover > fieldset': {
        borderColor: '#D23F57 !important',
      },
    },
    focused: {
      '& > fieldset': {
        borderColor: '#D23F57 !important',
        borderWidth: '1px !important',
      },
    },
  }));

  const outlinedInputClasses = useOutlinedInputStyles();

  const { register, handleSubmit } = useForm<SubmitForm>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    if (debouncedValue === '') return;

    const inputElement = inputRef.current as unknown as HTMLInputElement;

    inputElement.blur();
    handleHideResult();
    navigate(PATH_PUBLIC.product.search(searchValue, categoryId));
  };

  const handleClickItem = (slug: string, productId: string) => {
    handleHideResult();
    navigate(PATH_PUBLIC.product.slug(slug, productId));
  };

  const handleSearch = () => {
    if (debouncedValue === '') return;

    handleHideResult();
    navigate(PATH_PUBLIC.product.search(searchValue, categoryId));
  };

  const handleChange = (e: React.PointerEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleClear = () => {
    const inputElement = inputRef.current as unknown as HTMLInputElement;

    setSearchValue('');
    setSearchResult([]);

    inputElement.focus();
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
    }
  }, [debouncedValue]);

  const { isFetching } = useQuery({
    queryKey: ['search', debouncedValue, categoryId],
    queryFn: () => getSearchResult(debouncedValue, categoryId),
    enabled: !!debouncedValue,
    onSuccess: ({ data: { data, status } }) => status && setSearchResult(data),
  });

  return (
    <Tippy
      interactive
      visible={showResult}
      offset={[0, 8]}
      placement="bottom-start"
      render={attrs => (
        <Box sx={styles.boxResult} {...attrs}>
          <Box component={'div'} sx={styles.searchTitle} onClick={handleSearch}>
            <StoreIcon fontSize="small" color="error" />
            <FormattedMessage {...messages.searchFor} />: &quot;
            <Box component={'span'} sx={styles.searchValue}>
              {searchValue}
            </Box>
            &quot;
          </Box>
          {searchResult?.map(product => (
            <Box
              component={'div'}
              key={product._id}
              sx={{ cursor: 'pointer' }}
              onClick={() => handleClickItem(product.slug, product._id)}
            >
              <Box sx={styles.boxWrapper}>
                <Box component={'img'} sx={styles.boxImage} src={product.thumbnail} alt={product.name} />
                <Box component={'span'} sx={styles.boxTitle}>
                  {product.name}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      onClickOutside={handleHideResult}
    >
      <Box component={'form'} noValidate sx={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={styles.formControl}>
          <OutlinedInput
            classes={outlinedInputClasses}
            sx={styles.outlineInput}
            fullWidth
            {...register('searchValue', {
              onChange: e => handleChange(e),
            })}
            inputRef={e => {
              inputRef.current = e;
            }}
            onFocus={() => setShowResult(true)}
            value={searchValue}
            size="small"
            placeholder={t.formatMessage({ ...messages.searchingFor })}
            startAdornment={<SearchIcon sx={styles.outlineInputSearchIcon} />}
            endAdornment={<CategoryMenu onChangeCategoryId={setCategoryId} />}
          />
          {!!searchValue && !isFetching && <ClearIcon fontSize="small" sx={styles.closeIcon} onClick={handleClear} />}
          {isFetching && <RefreshIcon fontSize="small" sx={styles.loadingIcon} />}
        </FormControl>
      </Box>
    </Tippy>
  );
}
