import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:"1rem",
        marginBottom:"4rem",
        "& .siteBox": {
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
            "& .MuiTypography-root": {
                color:theme.palette.text.sitemap,
            },
            "& a": {
                color:theme.palette.text.sitemap,
                textDecoration:"none",
            },
        },
    },
}));
const Sitemap = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} md={3}>
                    <Box className={"siteBox"}>
                        <Typography variant='h6' component="h6">Sitemap</Typography>
                        <Link to="/">About</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box className={"siteBox"}>
                        <Typography variant='h6' component="h6">Services</Typography>
                        <Link to="/">Commercial Insurance</Link>
                        <Link to="/">Limousine Insurance</Link>
                        <Link to="/">Restaurants Insurance</Link>
                        <Link to="/">Commercial Auto</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box className={"siteBox"}>
                        <Typography variant='h6' component="h6">More Services</Typography>
                        <Link to="/">Get a Quote</Link>
                        <Link to="/">DMV service</Link>
                        <Link to="/">General Liability</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box className={"siteBox"}>
                        <Typography variant='h6' component="h6">Insurances</Typography>
                        <Link to="/">Hayward insurance</Link>
                        <Link to="/">San Leandro  Insurance</Link>
                        <Link to="/">Santa Clara Insurance</Link>
                        <Link to="/">Oakland Insurance</Link>
                        <Link to="/">Fremont Insurance</Link>
                        <Link to="/">Fremont Insurance</Link>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Sitemap