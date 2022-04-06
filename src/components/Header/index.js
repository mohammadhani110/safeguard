import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import React from 'react'
import Navbar from '../Navbar'
import NavbarMobile from '../NavbarMobile';

const Header = () => {
  const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("1015"));
  return (
    <>
    {mobile?
      <NavbarMobile/>:
      <Navbar/>
    }
    </>
  )
}

export default Header