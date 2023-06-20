import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@mui/icons-material/Close';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

import useResponsive from '../../hook/useResponsive';
import logo from '../../resources/images/logo.png';
import { listMenuItems } from '../NavBar';
import DropDown from '../NavBar/Dropdown';
import SideBarCart from '../SideBarCart';
import CategoryMenu from './CategoryMenu';
import UserButton from './UserButton';
import styles from './styles';

function Header() {
  const isDesktop = useResponsive('up', 'md');

  const isLaptopL = useResponsive('down', 'lg');

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

  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
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

  const handleOpenFormSearch = () => setOpenSearch(true);

  const handleCloseFormSearch = () => setOpenSearch(false);

  return (
    <>
      <Box component="div" sx={() => (!showHeader ? { height: '80px' } : {})}>
        <Box sx={() => (showHeader ? { ...styles.boxHeader, ...showInit } : styles.boxHeaderScroll)}>
          <Box sx={styles.boxWrapperHeader}>
            <Container maxWidth="lg" sx={styles.containerHeader}>
              <Box sx={styles.boxLogo}>
                <Link to="/">
                  <img width="60" height="60" src={logo} alt="logo" />
                </Link>
                {!showHeader && isDesktop && (
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
              {isDesktop && (
                <Box sx={{ ...styles.boxWrapperFrom }}>
                  <Box sx={styles.boxFromControl}>
                    <FormControl fullWidth>
                      <OutlinedInput
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
              )}
              <Box display="flex" gap="12px" marginLeft={2}>
                {isLaptopL && (
                  <Button type="button" onClick={handleOpenFormSearch} sx={styles.btnSearch}>
                    <SearchIcon />
                  </Button>
                )}
                <UserButton />
                <SideBarCart />
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <Modal
        open={openSearch}
        onClose={handleCloseFormSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxModalSearch}>
          <IconButton aria-label="delete" onClick={handleCloseFormSearch}>
            <CloseIcon />
          </IconButton>
          <FormControl fullWidth>
            <OutlinedInput
              classes={outlinedInputClasses}
              sx={styles.outlineInput}
              fullWidth
              size="small"
              placeholder="Searching for..."
              startAdornment={<SearchIcon sx={styles.outlineInputSearchIcon} />}
            />
          </FormControl>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
