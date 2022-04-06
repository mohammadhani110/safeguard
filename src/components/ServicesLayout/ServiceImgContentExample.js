import React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: "7rem 0",
        "& .title": {
            marginBottom: "1.2rem",
            [theme.breakpoints.down(1200)]: {
                fontSize: "2rem",
                margin: "2rem 2rem auto",
                lineHeight: "2.375rem"
            },
            [theme.breakpoints.down("md")]: {
                margin: "1rem 2rem",
                lineHeight: "2rem",
                maxWidth: "100%"

            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.2rem",
                lineHeight: "2rem",
                margin: "1rem",

            }
        },
        "& .heading": {
            [theme.breakpoints.down(1200)]:{
                fontSize:"1.5rem",
                lineHeight: "2.375rem",                
                margin:"2rem 2rem auto"

            },
            [theme.breakpoints.down("md")]: {
                marginLeft: "2rem",
                marginRight: "2rem"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                lineHeight: "2rem",                
                marginTop: "1.5rem",
                marginBottom: "0",
                margin: "1rem"
            },
        },
        "& .subTitle": {
            marginBottom: ".75rem",
            textTransform: "uppercase",
            [theme.breakpoints.down(1200)]: {
                fontSize: "2rem",
                lineHeight: "2.375rem",
                margin: "2rem 2rem auto"

            },
            [theme.breakpoints.down("md")]: {
                marginLeft: "2rem",
                marginRight: "2rem"
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "1.5rem",
                lineHeight: "1.375rem",
                marginTop: "1.5rem",
                marginBottom: "0",
                margin: "1rem"
            },
        },
        "& .para": {
            marginBottom: "1.5rem",
            [theme.breakpoints.down(1200)]: {
                margin: "2rem 2rem 2rem"
            },
            [theme.breakpoints.down("md")]: {
                marginLeft: "2rem",
                marginRight: "2rem",
                marginBottom: "3rem",
            },
            [theme.breakpoints.down("sm")]: {
                margin: "1rem",
                marginBottom: "2rem",
            }
        },
        "& .imgBox": {
            display: "flex",
            [theme.breakpoints.down("md")]: {
                justifyContent: "flex-start",
                marginBottom:"1.5rem",
                marginLeft:"2rem"
            },  
            [theme.breakpoints.down("sm")]: {
                 marginLeft:"1rem"

            },
            "& .img": {
                [theme.breakpoints.down(1200)]: {
                    maxWidth: "90%"
                },

            }
        },
        "&.bg": {
            background: "#F3FBFF !important",
        },
        "& .flexRight": {
            display: "flex",
            justifyContent: "flex-end",
        },
    },
    cta: {
        background: theme.palette.text.primary,
        textTransform: "none",
        padding: ".75rem 2rem",
        borderRadius: "100px",
        color: "#fff",
        fontWeight: "600",
        display: "inherit",
        margin: "0 auto",
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

const ServiceImgContentExample = ({ data }) => {
    const { imgDirection, image, title, heading, para, para2, para3, background, cta,link } = data
    const classes = useStyles()
    const navigate = useNavigate()

    return (
        <section className={`${classes.wrapper} ${background ? "bg" : ""}`}>
            <Container>
                <Grid container flexDirection={imgDirection == "left" ? "row" : "row-reverse"} mb={5}>
                    <Grid item xs={12} md={6} className={`${imgDirection == "right" ? "flexRight" : ""} imgBox`}>
                        <img src={image} alt="section img" height={"100%"} width="auto" className='img' />

                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Typography variant='h2' component="h2" className="title">{title}</Typography>
                        <Typography variant='body1' component="p" className="para">{para}</Typography>
                        <Typography variant='h6' component="h6" className="">{heading}</Typography>
                        <Typography variant='body1' component="p" className="para">{para2}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='body1' component="p" className="para">{para3}</Typography>
                        <Button variant='contained' className={classes.cta} onClick={() => { navigate(link) }}>{cta}</Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default ServiceImgContentExample
