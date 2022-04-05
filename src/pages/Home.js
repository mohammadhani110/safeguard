// import { Container } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import ImgContentLayout from '../components/ImgContentLayout'
import hero from "../assets/home/heroSection.png"
import about from "../assets/home/aboutSection.png"
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

// const useStyles = makeStyles((theme) => ({


// }))
const Home = () => {
  return (
    <>
      <HeroSection imgDirection={"right"} img={hero} />
      <ImgContentLayout imgDirection={"left"} img={about} />
      <ServicesSection />
      <ContactSection />
    </>
  )
}

export default Home