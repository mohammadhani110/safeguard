import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import about from "../assets/about.png"
import ContactSection from '../components/ContactSection'
import CountriesList from '../components/CountriesList'
import ImgContentLayout from '../components/ImgContentLayout'
import NewsLetter from '../components/NewsLetter'

const useStyles = makeStyles((theme) => ({
  about: {
    "& .italicQuote": {
      fontWeight: "bold",
      fontStyle: "italic",
      fontSize: "1.2rem",
      lineHeight: '2rem',
      textAlign: "center",
      maxWidth: "60%",
      margin: "4rem auto 3rem",
    },
    "& .countryBox": {
      "& li": {
        listStyle: "none",
        lineHeight: "1.75rem",
      },
      "& .country": {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginRight: ".5rem",
      },
      "& .city": {},
    },
  }

}))
const data = {
  image: about,
  title: "Why Choose SaveGuard?",
  subTitle: "About Us",
  para: `When you decide it is time to buy your insurance, you think of two things only. is my property, my family and my self GUARDED from Risks. the second thing  is how can I SAVE money.
  At SaveGuard insurance agency, our primary goal is to provide you with the best insurance from the company which perfectly suits you and can truly satisfies your need while save you as much as you want.
  our Job at SaveGuard is to find a way to Save Your Money And Guard Your Car, Home and Business.
  thus its our Job to find best company for you.
  at SaveGuard we want to prove that Good Coverage Doesn't Need to Be expensive.`,
  imgDirection: "right",
  background: true,
}
const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.about}>
      <ImgContentLayout data={data} />
      <p className='italicQuote'>“If your business is located in one of the cities below, Contact us at 510-538-7233 to Schedule an appointment with a specialist to discuss your policy or your Insurable interests. “</p>
      <CountriesList />
      <NewsLetter />
      <ContactSection isHome={true}/>

    </section>
  )
}

export default About