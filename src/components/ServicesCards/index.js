import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { Link } from 'react-router-dom';
import serviceIcon1 from "../../assets/home/serviceIcon1.png"
import serviceIcon2 from "../../assets/home/serviceIcon2.png"
import serviceIcon3 from "../../assets/home/serviceIcon3.png"
import serviceIcon4 from "../../assets/home/serviceIcon4.png"
import ServiceCardSingle from '../ServiceCardSingle';
const useStyles = makeStyles((theme) => ({

    ctaButton: {
        background: theme.palette.background.gradient,
        textTransform: "none",
        padding: "20px 24px",
        borderRadius: "6px",

        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
        "&:hover": {
            boxShadow: "none",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.22)",
        },
        "& a": {
            color: theme.palette.common.white,
            // padding: "7px 15px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
        },
    },
    ctaSecondary: {
        background: theme.palette.text.primary,
        textTransform: "none",
        padding: "18px 35px",
        borderRadius: "100px",
        color:"#fff",
        fontWeight:"600",

        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
        "&:hover": {
            boxShadow: "none",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.22)",
            color:theme.palette.text.primary,
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "500",
        },
    },
    testimonialsContainer: {
        // marginTop: "300px",
        // marginBottom: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",


        "& .highlight-bar": {
            background: theme.palette.text.link_sec,
            borderRadius: "8px",
            width: "50px",
            height: "12px",
            marginBottom: "23px",
        },
        "& .container-title": {
            textAlign: "center",
            fontWeight: 600,
            fontSize: "35px",
            marginBottom: "23px",
        },
        "& .container-para": {
            textAlign: "center",
            width: "50%",
            fontWeight: 300,
            fontSize: "18px",
            marginBottom: "70px",
            [theme.breakpoints.down("600")]: {

                width: '100%',

            },
        },

        "& .testimonials": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            marginBottom: "76px",
            [theme.breakpoints.down("1100")]: {
                flexWrap: "wrap",
                gap: "2rem",
                justifyContent: "space-around",


            },

            "& .testimonials-item": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                "& ul.features": {
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: 'flex-start',
                    padding: 0,
                    maxWidth: "230px",
                    width: '100%'
                },
                "& .avatar": {
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    boxShadow: "0px 3px 16px rgba(62, 62, 62, 0.15)",
                    border: `3px solid ${theme.palette.background.home}`,
                    position: "relative",
                    top: "30px",
                    zIndex: 1
                },
                "& .testimonials-item-info": {
                    // padding: "40px 28px",
                    padding: "0px",
                    paddingTop: "2rem",
                    background: theme.palette.background.paper,
                    borderRadius: "5px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.06)",
                    width: "270px",
                    minHeight: "277px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // gap: "25px",

                    "& .quotes-svg": {
                        width: "32px",
                        marginBottom: "18px",
                    },
                    "& .comment": {
                        fontWeight: 300,
                        fontSize: "12px",
                        // marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                        listStyle: "none",

                    },
                    "& .name": {
                        fontWeight: 500,
                        fontSize: "15px",
                        textAlign: "center",
                        marginTop: "10px",
                        marginBottom: "17px",
                        background: theme.palette.text.primary,
                        color: "#fff",
                        padding: "1rem",
                        borderRadius: "6px",
                        fontWeight: "600",
                        maxWidth: "200px",
                        width: "100%"
                    },
                },
            },
        },
    },
}));
const services=[
    {
        img:serviceIcon1,
        title:"Personal Insurance",
        features:["Auto, Home, Umbrella","Rennters Insurance","SR22"]
    },
    {
        img:serviceIcon2,
        title:"Commercial Insurance",
        features:["Small Business Insurance","Commercial Auto Insurance","Workers Comps","Technology & Project"]
    },
    {
        img:serviceIcon3,
        title:"Bonds",
        features:["Contractor Bond","Dealers Bond"]
    },
    {
        img:serviceIcon4,
        title:"DMV Services",
        features:["Fleet DMV Programs"]
    },
]
const ServicesCard = () => {
    const classes = useStyles()
    return (
        <div className={classes.testimonialsContainer}>

            <div className="testimonials">
                {services.map(service => {
                    return <ServiceCardSingle img={service.img} title={service.title} features={service.features} />

                })}
            </div>

            <Button className={classes.ctaSecondary}>
                {/* <Link >Get started</Link> */}
                <>View More Services</>
            </Button>
        </div>
    )
}

export default ServicesCard