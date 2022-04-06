import * as React from 'react';
import { Box, Container, AppBar, Toolbar, IconButton, useMediaQuery, Button } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { Link, NavLink, useLocation, } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo from "../../assets/home/logo.png";


const useStyles = makeStyles((theme) => ({
    AppBar: {
        // "boxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        // "WebkitBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        // "MozBoxShadow": "0px 12px 18px 3px rgba(237,235,235,0.75)",
        boxShadow: "0px 4px 16px rgba(146, 146, 146, 0.2)",

        flex: 0,
        "& .MuiToolbar-root": {
            // borderBottom: "1px solid #ff0753"
        },
        "& .toolbar": {
            padding: 0,
            "& a": {
                textDecoration: "none",
                minWidth: "max-content"
            }
        },
        "& .linkBox": {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1.5rem",
            flex: 1,
            fontSize: ".9rem",
            fontWeight: 600,
            "& a": {
                color: theme.palette.text.para,
            },
            "& .active": {
                fontWeight: 700,
                color: theme.palette.primary.main,
            }
        },
        "& .linkBoxMb": {
            display: "flex",
            justifyContent: "flex-end",
            gap: "4rem !important"
        },
    },
    cta: {
        background: 'transparent',
        textTransform: "capitalize",
        padding: ".75rem 1.5rem",
        borderRadius: "100px",
        fontWeight: "600",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.12)",
        border: `2px solid ${theme.palette.text.primary}`,
        color: `${theme.palette.text.primary} !important`,

        "&:hover": {
            boxShadow: "none",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.22)",
        },

    },
}))


const Navbar = () => {
    const classes = useStyles()
    const location = useLocation();
  
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("1012"));


    return (
        // <Box sx={{ flexGrow: 0 }}>
        <AppBar position="static" color='transparent' elevation={0} className={classes.AppBar}>
            <Container>
                <Toolbar className='toolbar'>
                    {/* <IconButton
                            size="large"
                            edge="start"
                            color="primary"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MdMenu />
                        </IconButton> */}
                    <Box component="div" sx={{ textAlign: "center", padding: "1rem 0", flex: 0 }}>
                        <img src={logo} alt="logo" height={"100%"} width="auto" />
                    </Box>
                    <Box className={`${mobile ? "linkBoxMb" : ""} linkBox`}>
                        <NavLink
                            to="/"
                            className={location?.pathname === "/" ? "active" : ""}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={location?.pathname === "/about" ? "active" : ""}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/personal-insurance"
                            className={location?.pathname === "/personal-insurance" ? "active" : ""}

                        >
                            Personal Insurance
                        </NavLink>


                        <NavLink
                            to="/commercial-insurance"
                            className={location?.pathname === "/commercial-insurance" ? "active" : ""}
                        >
                            Commercial Insurance
                        </NavLink>
                        <NavLink
                            to="/bonds"
                            className={location?.pathname === "/bonds" ? "active" : ""}
                        >
                            Bonds
                        </NavLink>
                        <NavLink
                            className={location?.pathname === "/dmv-services" ? "active" : ""}
                            to={{ pathname: "https://www.1stopautoreg.com/" }}
                            target="_blank"
                            onClick={()=>{
                                const win=window.open("https://www.1stopautoreg.com/","_blank")   
                                win.focus();
                            }}
                        >
                            DMV Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={classes.cta}
                        >
                            Contact Us
                        </NavLink>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

        // </Box>
    );
}

export default Navbar;