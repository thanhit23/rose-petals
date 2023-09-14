import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import StoreIcon from '@mui/icons-material/Store';
import { Box, FormControl, OutlinedInput } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import HeadlessTippy from '@tippyjs/react/headless';

import useDebounce from 'src/hooks/useDebounce';
import { PATH_PUBLIC } from 'src/routes/paths';

import CategoryMenu from '../CategoryMenu';
import messages from './messages';
import { getSearchResult } from './service';
import styles from './styles';
import { Product, SubmitForm } from './types';

export default function Search() {
  const inputRef = useRef();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const navigate = useNavigate();

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
    navigate(PATH_PUBLIC.product.search(searchValue));

    const inputElement = inputRef.current as unknown as HTMLInputElement;
    inputElement.blur();
    handleHideResult();
  };

  const handleClickItem = (slug: string) => {
    navigate(PATH_PUBLIC.product.slug(slug));
    handleHideResult();
  };

  const handleSearch = () => {
    navigate(PATH_PUBLIC.product.search(searchValue));
    handleHideResult();
  };

  const handleChange = (e: React.PointerEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);

    const inputElement = inputRef.current as unknown as HTMLInputElement;
    inputElement.focus();
  };

  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }
  }, [debouncedValue]);

  const { isFetching } = useQuery({
    queryKey: ['search', debouncedValue, categoryId],
    queryFn: () => getSearchResult(debouncedValue, categoryId),
    enabled: !!debouncedValue,
    onSuccess: ({ data: { data, status } }) => status && setSearchResult(data),
  });

  const renderResult = () => (
    <Box sx={styles.boxResult}>
      <Box component={'div'} sx={styles.searchTitle} onClick={handleSearch}>
        <StoreIcon fontSize="small" color="error" />
        <FormattedMessage {...messages.searchFor} />: &quot;{searchValue}&quot;
      </Box>
      {searchResult?.map(product => (
        <Box
          component={'div'}
          key={product._id}
          sx={{ cursor: 'pointer' }}
          onClick={() => handleClickItem(product.slug)}
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
  );

  return (
    <HeadlessTippy
      interactive
      visible={showResult}
      offset={[0, 8]}
      placement="bottom-start"
      render={renderResult}
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
            placeholder="Searching for..."
            startAdornment={<SearchIcon sx={styles.outlineInputSearchIcon} />}
            endAdornment={<CategoryMenu setCategoryId={setCategoryId} />}
          />
          {!!searchValue && !isFetching && <ClearIcon fontSize="small" sx={styles.closeIcon} onClick={handleClear} />}
          {isFetching && <RefreshIcon fontSize="small" sx={styles.loadingIcon} />}
        </FormControl>
      </Box>
    </HeadlessTippy>
  );
}
