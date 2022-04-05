import { Container, Typography } from '@mui/material'
import React from 'react'
import ServicesCards from '../ServicesCards'

const ServicesSection = () => {
    return (
        <section style={{ height: "1000px", background: "#F3FBFF", padding: "7rem 0" }}>
            <Container>
                <Typography variant='h3' component="h3" color="primary" sx={{ textTransform: "uppercase", textAlign: "center", marginBottom: "1rem" }}>Our Services</Typography>
                <Typography variant='h2' component="h2" sx={{ textAlign: "center", maxWidth: "50%", margin: "0 auto", marginBottom: "2rem" }}>You Have Built Your Business <span>Let US Protect IT</span></Typography>
                <ServicesCards />
            </Container>
        </section>
    )
}

export default ServicesSection