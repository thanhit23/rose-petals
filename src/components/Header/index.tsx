import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

import styles from './styles';
import CartButton from './Cart';
import UserButton from './UserButton';
import CategoryMenu from './CategoryMenu';
import DropDown from '../NavBar/Dropdown';
import { listMenuItems } from '../NavBar';
import logo from '../../resources/images/logo.png';

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

  const [showHeader, setShowHeader] = React.useState(true);
  const [showInit, setShowInit] = React.useState({});

  React.useEffect(() => {
    const scrollPosition = 380;
    const scrollPositionInit = 135;

    function handleScroll() {
      const newScrollPosition = window.scrollY;
      newScrollPosition >= scrollPositionInit ? setShowInit({ top: '-80px' }) : setShowInit({});
      newScrollPosition <= scrollPosition && setShowHeader(true);
      scrollPosition < newScrollPosition && setShowHeader(false);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <Box component="div" sx={() => (!showHeader ? { height: '80px' } : {})}>
      <Box sx={() => (showHeader ? { ...styles.boxHeader, ...showInit } : styles.boxHeaderScroll)}>
        <Box sx={styles.boxWrapperHeader}>
          <Container maxWidth="lg" sx={styles.containerHeader}>
            <Box sx={styles.boxLogo}>
              <Link to="#">
                <img width="60" height="60" src={logo} alt="asdasdas" />
              </Link>
              {!showHeader && (
                <Box sx={styles.boxContainerCategoryDropdown}>
                  <Box sx={styles.boxWrapperCategoryDropdown}>
                    <DropDown
                      btnSx={styles.btnCategoryDropdown}
                      buttonIcon
                      menuItem={listMenuItems}
                      buttonIconFirst={<GridViewRoundedIcon fontSize="small" />}
                    />
                  </Box>
                </Box>
              )}
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
