import { Container, Typography } from '@mui/material'
import React from 'react'
import ServicesCards from '../ServicesCards'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    service: {
        background: theme.palette.background.default,
        padding: "7rem 0",
        height: "1000px",
        [theme.breakpoints.down(1200)]:{
            height:"100%"
        },
        "& .title": {
            textTransform: "uppercase", textAlign: "center", marginBottom: "1rem",
            [theme.breakpoints.down(1200)]:{
                fontSize:"2rem",
                lineHeight: "2.375rem",
            },
            [theme.breakpoints.down("sm")]:{
                fontSize:"1.5rem",
                marginTop:"1rem",
                marginBottom:".5rem",
            }
        },
        "& .heading": {
            textAlign: "center", maxWidth: "50%", margin: "0 auto", marginBottom: "2rem",
            [theme.breakpoints.down(1200)]:{
                fontSize:"2rem",
                lineHeight: "2.375rem",
                maxWidth:"100%"

            },
            [theme.breakpoints.down("sm")]:{
                fontSize:"1.5rem",
                marginTop:"1rem",
                marginBottom:".5rem",
            }
        },

    },
}))

const ServicesSection = () => {
    const classes = useStyles()
    return (
        <section className={classes.service}>
            <Container>
                <Typography variant='h3' component="h3" color="primary" className="title">Our Services</Typography>
                <Typography variant='h2' component="h2" className='heading'>You Have Built Your Business <span>Let US Protect IT</span></Typography>
                <ServicesCards />
            </Container>
        </section>
    )
}

export default ServicesSection