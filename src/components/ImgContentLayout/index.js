import React from 'react'
import { Grid, Typography, Container, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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

const ImgContentLayout = ({ imgDirection, img }) => {
    const classes = useStyles()

    return (
        <section>
            <Container>
                <Grid container flexDirection={imgDirection == "left" ? "row" : "row-reverse"}>
                    <Grid item xs={12} md={6}>
                        <img src={img} />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' component="h3" color="primary">About Us</Typography>
                        <Typography variant='h2' component="h2" >Why Choose SaveGuard?</Typography>
                        <Typography variant='body1' component="p" >When you decide it is time to buy your insurance, you think of two things only. is my property, my family and my self GUARDED from Risks. the second thing  is how can I SAVE money.
                            At SaveGuard insurance agency, our primary goal is to provide you with the best insurance from the company which perfectly suits you and can truly satisfies your need while save you as much as you want.
                            our Job at SaveGuard is to find a way to Save Your Money And Guard Your Car, Home and Business.
                            thus its our Job to find best company for you.
                            at SaveGuard we want to prove that Good Coverage Doesn't Need to Be expensive.</Typography>
                        <Button variant='contained' className={classes.cta}>View more</Button>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default ImgContentLayout
