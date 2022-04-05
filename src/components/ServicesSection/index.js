import { Container, Typography } from '@mui/material'
import React from 'react'
import ServicesCards from '../ServicesCards'

const ServicesSection = () => {
    return (
        <Container>
            <Typography variant='h3' component="h3" color="primary">Our Services</Typography>
            <Typography variant='h2' component="h2">You Have Built Your Business <span>Let US Protect IT</span></Typography>
            <ServicesCards/>
        </Container>
    )
}

export default ServicesSection