import React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: "7rem 0",
        "& .title": {
            marginBottom: "1.2rem"
        },
        "& .subTitle": {
            marginBottom: ".75rem",
            textTransform: "uppercase"
        },
        "& .para": {
            marginBottom: "1.5rem"
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

const ServiceImgContentList = ({ data }) => {
    const { imgDirection, image, title, heading, para, heading2, para2, lists, background, cta } = data
    const classes = useStyles()

    return (
        <section className={`${classes.wrapper} ${background ? "bg" : ""}`}>
            <Container>
                <Grid container flexDirection={imgDirection == "left" ? "row" : "row-reverse"} mb={5}>
                    <Grid item xs={12} md={6} className={imgDirection == "right" ? "flexRight" : ""}>
                        <img src={image} alt="section img" height={"100%"} width="auto" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        {/* <Typography variant='h3' component="h3" color="primary" className="subTitle">{subTitle}</Typography> */}
                        <Typography variant='h2' component="h2" className="title">{title}</Typography>
                        <Typography variant='h6' component="h6" className="heading">{heading}</Typography>
                        <Typography variant='body1' component="p" className="para">{para}</Typography>
                        {heading2 && <Typography variant='h6' component="h6" className="heading">{heading2}</Typography>}
                        {para2 && <Typography variant='body1' component="p" className="para">{para2}</Typography>}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        {lists.map(({ heading, para }) => {
                            return (
                                <>
                                    <Typography variant='h6' component="h6" className="heading">{heading}</Typography>
                                    <Typography variant='body1' component="p" className="para">{para}</Typography>
                                </>)
                        })}
                        <Button variant='contained' className={classes.cta}>{cta}</Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default ServiceImgContentList
