import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, TextField, Box, Grid, Typography, Button } from '@mui/material'
import img from '../../assets/contact.png'
import contact from '../../assets/home/contact.png'

const useStyles = makeStyles((theme) => ({
    ContactUsSection: {
        background: theme.palette.background.default,
        padding: "7rem 0",
        
        "& .wrapper":{
            background:"#fff",
            padding:0,
            margin:0,            
            height: "600px",
        },
        "& .gridImg":{
         
            "& .imgBox":{

                width:"100%",
                maxHeight:"600px",
                background:`url(${img}) no-repeat center center`,
                backgroundSize:"40rem",
                height:"100%"
                // "& .img":{
                //     maxWidth:"100%",
                //     width:"100%",
                //     height:"auto"
                // }

            },
        },
        "& .gridForm":{
            background:"#fff",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            padding:"2rem 2rem",
            "& .phoneBox":{
                display:"flex",
                alignItems:"center",
                gap:"1rem",
                marginBottom:"2rem",
            },
            "& .form":{
                // margin:"1rem .5rem"
            }
            
        },
       

    },
}))
const ContactUsSection = () => {
    const classes = useStyles()

    return (
        <section className={classes.ContactUsSection}>
            <Container >
                <Grid container className='wrapper' >
                    <Grid item xs={12} md={6} className='gridImg'>
                        <Box className='imgBox'>
                            {/* <img src={img} alt="img" className='img'/> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} className='gridForm'>
                        <Typography variant="h2" component={"h2"} color="primary">Contact Us</Typography>
                        <Box className="phoneBox">
                            <img src={contact} alt="contact" height={"auto"}/>
                            <Typography variant="h6" component={"h6"} >510-538-7233</Typography>
                            <Typography variant="h6" component={"h6"} >805-294-2092</Typography>
                            <Typography variant="h6" component={"h6"} >510-537-8401</Typography>
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '90%' },
                               
                            }}
                            noValidate
                            autoComplete="off"
                            className='form'

                        >
                            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue="Message"
                                fullWidth
                            />
                            <Button variant="contained" type="submit">Send Message</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </section>
    )
}

export default ContactUsSection