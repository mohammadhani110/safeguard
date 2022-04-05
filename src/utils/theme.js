import { createTheme } from "@mui/material/styles";

//  // neutral:{
      ////   main:"#086BA3"        
//// }
export const theme = createTheme({  
    typography: {
      fontFamily: 
        '"Montserrat", sans-serif',
        h1:{
          fontSize:"3rem",
          fontWeight:"700",
          lineHeight:"3.375rem",
        },
        h2:{
          fontSize:"2.5rem",
          fontWeight:"600",
          lineHeight:"3.375rem",
        },
        h3:{
          fontSize:"2rem",
          fontWeight:"700",
          lineHeight:"3.375rem",
        },
        h6:{
          fontSize:"1.2rem",
          fontWeight:"600",
          lineHeight:"3.375rem",
        },
        body1:{
          fontSize:"1rem",
          lineHeight:"28px",
          fontWeight:'500',
          color:"#464B5E",
        },
    },
    palette:{
      primary:{
        main:"#086BA3",
      },
      text:{
        primary:"#086BA3",
        para:"#464B5E",
        placeholder:"#8A8D95",
        sitemap:"#222531",
      },
      background:{
        default:"#F3FBFF", 
        primary:"#086BA3",

      },           
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': "Montserrat",
        },
      },
    },
  });