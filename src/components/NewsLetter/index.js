import React from 'react'
import { Typography, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    newsLetter: {
        background:theme.palette.background.default,
        padding:"7rem 0",
        height: "500px",        
        [theme.breakpoints.down("md")]: {
            height:"100%"
        }
    },
}))
const NewsLetter = () => {
    const classes = useStyles()

    return (
        <section className={classes.newsLetter}>
            <Container className='container'>
                <Typography variant="h2" component={"h2"}>NewsLetter</Typography>
                <Typography variant="h6" component={"h6"}>Ride Sharing Insurance Coverage:</Typography>
                <Typography variant="body1" component={"p"}>Ride sharing companies such as Uber, Lyft and Sidecar were establish to fill up the empty seat of your vehicle when you go to work, when you come home; however due to the ease of doing business and the amount of demand specially in big cities like San Francisco; UBER X, became a full time job for most drivers.
                    As a full time Uber X driver, you are driving around 9 hours a day mostly in high dense areas, the question that you should ask your self, Dose my personal insurance Covers me?
                    Uber Claims that the moment you turn on your phone; Uber's $1 million Liability coverage will kick in, But what about your vehicle? and if that is true, why would Uber Deactivate your phone after an accident.
                </Typography>

            </Container>

        </section>
    )
}

export default NewsLetter