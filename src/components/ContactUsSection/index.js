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
            borderRadius:"20px",
        },
        "& .gridImg":{
            [theme.breakpoints.down("md")]:{
                display:"none"
            },
            "& .imgBox":{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                
                width:"100%",
                maxHeight:"600px",
                background:`url(${img}) no-repeat center center`,
                backgroundSize:"40rem",
                height:"100%"
            
            

            },
        },
        "& .gridForm":{
            background:"#fff",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            padding:"2rem 2rem",
            borderTopRightRadius:"20px",
            borderBottomRightRadius: "20px",
            borderRadius:"20px",
            "& .heading":{
                marginBottom:"1rem"
            },
            "& .phoneBox":{
                display:"flex",
                alignItems:"center",
                gap:"1rem",
                marginBottom:"2rem",
                flexWrap:"wrap",
                
                "& .phone":{
                    [theme.breakpoints.down(1110)]:{
                        fontSize:"1rem",
                        lineHeight:"1.5rem"
                    },
                    [theme.breakpoints.down("sm")]:{
                        fontSize:".9rem",
                        lineHeight:"1.5rem"
                    },
                },
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
                        <Typography variant="h2" component={"h2"} color="primary" className='heading'>Contact Us</Typography>
                        <Box className="phoneBox">
                            <img src={contact} alt="contact" height={"auto"}/>
                            <Typography variant="h6" component={"h6"} className="phone">510-538-7233</Typography>
                            <Typography variant="h6" component={"h6"} className="phone">805-294-2092</Typography>
                            <Typography variant="h6" component={"h6"} className="phone">510-537-8401</Typography>
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '90%', },
                               
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