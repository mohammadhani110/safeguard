import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, TextField, Box, Grid, Typography, Button } from '@mui/material'
import map from '../../assets/map.png'
import contact from '../../assets/home/contact.png'

const useStyles = makeStyles((theme) => ({
    OurOffice: {
        background: theme.palette.background.default,
        padding: "7rem 0",

        "& .wrapper": {
            // background:"#fff",
            // padding:0,
            // margin:0,            
            // height: "600px",
            // borderRadius:"20px",
        },
        "& .gridImg": {
            [theme.breakpoints.down("md")]: {
            },
            "& .imgBox": {               
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "100%",
                width: "100%",
                height: "100%"

            },
        },


    },
}))
const OurOffice = () => {
    const classes = useStyles()

    return (
        <section className={classes.OurOffice}>
            <Container >
                <Typography variant="h3" component={"h3"} color="primary" className='heading'>Visit Our Office</Typography>
                <Typography variant="h6" component={"h6"} className='subHeading'>22576 Mission Blvd Hayward, CA 94541</Typography>
                <Grid container className='wrapper' >

                    <Grid item xs={12} md={4} className='gridImg'>
                        <Box className='imgBox'>
                            <img src={map} alt="img" className='img' />
                            <Typography variant="h6" component={"h6"} className='imgText'>Hayward ​510-538-7233</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className='gridImg'>
                        <Box className='imgBox'>
                            <img src={map} alt="img" className='img' />
                            <Typography variant="h6" component={"h6"} className='imgText'>San Lorenzo
                                510-258-0764
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className='gridImg'>
                        <Box className='imgBox'>
                            <img src={map} alt="img" className='img' />
                            <Typography variant="h6" component={"h6"} className='imgText'>Stockton
                                209-242-2265</Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </section>
    )
}

export default OurOffice