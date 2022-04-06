// import { Container } from '@mui/material'
import React from 'react'
import HeroSection from '../components/HeroSection'
import ImgContentLayout from '../components/ImgContentLayout'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'

import hero from "../assets/home/heroSection.png"
import about from "../assets/home/aboutSection.png"

// const useStyles = makeStyles((theme) => ({


// }))
const data = {
  image: about,
  title: "Why Choose SaveGuard?",
  subTitle: "About Us",
  para: `When you decide it is time to buy your insurance, you think of two things only. is my property, my family and my self GUARDED from Risks. the second thing  is how can I SAVE money.
  At SaveGuard insurance agency, our primary goal is to provide you with the best insurance from the company which perfectly suits you and can truly satisfies your need while save you as much as you want.
  our Job at SaveGuard is to find a way to Save Your Money And Guard Your Car, Home and Business.
  thus its our Job to find best company for you.
  at SaveGuard we want to prove that Good Coverage Doesn't Need to Be expensive.`,
  imgDirection: "left",
  background: false,
  cta:"View More",
  link:"/about",
}
const Home = () => {
  return (
    <>
      <HeroSection imgDirection={"right"} img={hero} />
      <ImgContentLayout data={data} />    
      <ServicesSection />
      <ContactSection isHome={true}/>
    </>
  )
}

export default Home