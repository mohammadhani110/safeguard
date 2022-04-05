import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Sitemap from '../Sitemap'
import fb from '../../assets/home/fb.png'
import ig from '../../assets/home/ig.png'
import twt from '../../assets/home/twt.png'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    "& .footerBox": {
      display: "flex",
      justifyContent: "space-between",
      gap: "1rem",
      paddingBottom:"1rem",
      "& .MuiTypography-root": {
        color: theme.palette.text.sitemap,
      },
    },
    "& .socialBox": {
      display: "flex",
      alignItems: "center",
      gap: "1rem",


      "& img": {
        maxWidth: "100%",
        height: '18px'
      },
    },
  },
}));
const Footer = () => {
  const classes = useStyles()
  return (
    <section className={classes.footer}>
      <Sitemap />
      <Divider sx={{ borderBottomWidth: "thin", borderColor: "#343434",marginBottom:"2rem" }} />
      <Container className="footerBox">
        <Typography variant="h6" component={"h6"}>&copy; Creative 2022, All Rights Reserved</Typography>
        <Box className="socialBox">
          <img src={fb} alt="facebook icon" height="18px" width="100%" />
          <img src={ig} alt="instagram icon" height="18px" width="100%" />
          <img src={twt} alt="twitter icon" height="18px" width="100%" />
        </Box>
      </Container>
    </section>
  )
}

export default Footer