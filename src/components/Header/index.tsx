import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../resources/images/logo.png';
import UserButton from './UserButton';
import CartButton from './Cart';
import CategoryMenu from './CategoryMenu';

import styles from './styles';

function Header() {
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

  const [show, setShow] = React.useState(true);
  const [showInit, setShowInit] = React.useState({});

  React.useEffect(() => {
    const scrollPosition = 380;
    const scrollPositionInit = 135;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      newScrollPosition >= scrollPositionInit ? setShowInit({ top: '-80px' }) : setShowInit({});
      newScrollPosition <= scrollPosition && setShow(true);
      scrollPosition < newScrollPosition && setShow(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <Box component="div">
      <Box sx={() => (show ? { ...styles.boxHeader, ...showInit } : styles.boxHeaderScroll)}>
        <Box sx={styles.boxWrapperHeader}>
          <Container maxWidth="lg" sx={styles.containerHeader}>
            <Box sx={styles.boxLogo}>
              <Link href="#">
                <img width="60" height="60" src={logo} alt="asdasdas" />
              </Link>
            </Box>
            <Box sx={styles.boxWrapperFrom}>
              <Box sx={styles.boxFromControl}>
                <FormControl fullWidth>
                  <OutlinedInput
                    id=":R6ila9l6:"
                    classes={outlinedInputClasses}
                    sx={styles.outlineInput}
                    fullWidth
                    size="small"
                    placeholder="Searching for..."
                    startAdornment={<SearchIcon sx={styles.outlineInputSearchIcon} />}
                    endAdornment={<CategoryMenu />}
                  />
                </FormControl>
              </Box>
            </Box>
            <Box display="flex" gap="12px">
              <UserButton />
              <CartButton />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
