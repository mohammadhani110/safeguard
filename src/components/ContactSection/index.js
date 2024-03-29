import React from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { lineHeight } from '@mui/system';
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
    contactSection: {
        marginBottom: "4rem",

        "&.mt": {
            marginTop: "-15rem",
            [theme.breakpoints.down(1200)]: {
                margin: "0",
            },
            [theme.breakpoints.down("md")]: {
                marginBottom:"5rem"
            }

        },
        "& .container": {
            [theme.breakpoints.down(1200)]: {
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            },
            
        },
        "& .contactBox": {
            maxWidth: 970,
            height: 380,
            width: "100%",
            background: theme.palette.background.primary,
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "textAlign": "center",
            "gap": "2rem",
            "padding": "4rem 3rem",
            "margin": "0 auto",
            "borderRadius": "30px",
            [theme.breakpoints.down(1200)]: {
                "padding": "2rem 1rem",
                maxWidth:800,
                margin:"0",
                marginTop:"1rem",
                height:"100%"
            },
            [theme.breakpoints.down("sm")]: {
            },
            "& .MuiTypography-root": {
                color: "#fff",
                "width": "80%",
                "lineHeight": "3rem",
               
            },
            "& .title": {
                fontWeight:"bold",
                [theme.breakpoints.down(1200)]: {
                  fontSize:"2rem"                
                },
                [theme.breakpoints.down("sm")]:{
                    fontSize:"1.5rem",
                    width:"100%"
                },
            },
            "& .heading": {
                [theme.breakpoints.down(1200)]: {
                    lineHeight:"2.5rem",
                    fontSize:"1.75rem"                
                  },
                [theme.breakpoints.down("sm")]:{
                    fontSize:"1.25rem",
                    width:"100%",
                },
            },
            "& .para": {
                fontSize:'1rem',
                [theme.breakpoints.down(1200)]: {
                    lineHeight:"2rem",
                  },
            },

        },
        "& .emailBox": {
            background: "#fff",
            maxWidth: "474px",
            width: "100%",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            borderRadius: '100px',
            padding: "0 .3rem",

            "& .emailField": {
                flex: 1,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '100px',
                    color: theme.palette.text.placeholder,
                    '& fieldset': {
                        border: 'none',
                    },
                    '&:hover fieldset': {
                        border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                        border: 'none',
                    },
                },

            },
            "& .btn": {
                maxWidth: "9rem",
                height: "3.2rem",
                width: "100%",
                borderRadius: "100px",
                fontWeight: "bold"
            }
        },
    }
}));
const ContactSection = ({ isHome }) => {
    const classes = useStyles()
    return (
        <section className={`${classes.contactSection} ${isHome ? "mt" : ""}`}>
            <Container className="container">
                <Box component="div" className="contactBox">
                    <Typography component="h2" variant="h2" className='title'>Contact Us</Typography>
                    <Typography component="h3" variant="h3" className="heading">Subscribe below for interesting info</Typography>
                    <Typography component="p" variant="body1" className='para'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Let Them Know Why You’re the Best</Typography>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="emailBox"
                    >
                        <TextField
                            hiddenLabel
                            id="label"
                            variant="outlined"
                            size="medium"
                            placeholder='Enter your email'
                            className='emailField'
                        />

                        <Button className="btn" variant="contained" type="submit">Send</Button>
                    </Box>
                </Box>
            </Container>
        </section>
    )
}

export default ContactSection