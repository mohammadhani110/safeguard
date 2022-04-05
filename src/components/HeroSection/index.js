import { Button, Grid, Typography, Container } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    heroSection:{
        background: "#F3FBFF",
        padding:"7rem 0",
        "& .mainHeading":{
            marginBottom:".5rem",
            marginTop:"2rem"
        },
        "& .subHeading":{
            marginBottom:"1rem",
            textTransform:"uppercase",
        },
        "& .paragraph":{
            marginBottom:"1.5rem",
        },
        "& .heroImgBox":{
            display:"flex",
            justifyContent:"flex-end"
        },
    },
    cta: {
        background: theme.palette.text.primary,
        textTransform: "none",
        padding: ".75rem 2rem",
        borderRadius: "100px",
        color: "#fff",
        fontWeight: "600",

        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
        "&:hover": {
            boxShadow: "none",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.22)",
        },
        "& a": {
            color: theme.palette.common.white,
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
        },
    },
}));

const HeroSection = ({ imgDirection, img }) => {
    const classes = useStyles()
    return (
        <section className={classes.heroSection}>
            <Container>
                <Grid container columnSpacing={10} flexDirection={imgDirection == "left" ? "row" : "row-reverse"}>
                    <Grid item xs={12} md={6} className="heroImgBox">
                        <img src={img} alt="heroImg"/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h1' component="h1" color={"primary"} className="mainHeading">We Are SaveGuard Insurance Agency</Typography>
                        <Typography variant='h6' component="h6" className="subHeading">Earning Your Trust! Protecting Your Future.</Typography>
                        <Typography variant='body1' component="p" className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar quam nisi sem at condimentum. Sollicitudin sed magna sociis arcu diam, lectus. Enim adipiscing cursus   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar quam nisi sem at condimentum. Sollicitudin sed magna sociis arcu diam, lectus. Enim adipiscing cursus.</Typography>
                        <Button variant="contained" className={classes.cta}>Contact Us</Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default HeroSection
