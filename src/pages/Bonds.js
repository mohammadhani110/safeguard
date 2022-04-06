import React from 'react'
import { makeStyles } from '@mui/styles'
import about from "../assets/about.png"

import ImgContentLayout from '../components/ImgContentLayout'
import ServiceImgContentList from '../components/ServicesLayout/ServiceImgContentList'
import ContactSection from '../components/ContactSection'
import ServiceImgContent from '../components/ServicesLayout/ServiceImgContent'
import ServiceImgContentExample from '../components/ServicesLayout/ServiceImgContentExample'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  newsLetter: {
    background: theme.palette.background.default,
    padding: "7rem 0",
    height: "500px",

  },
}))

const data = {
  image: about,
  title: `Contractors and Business Bonds || Dealers and DMV Bonds  `,
  heading: `What is a Surety Bond?`,
  para: `A surety bond is a promise to pay one party " the Obligee" a certain amount of money usually the bond amount; if the Principal fails to meet his obligation. Thus protecting the oblige against losses caused by the principle.`,
  heading2: `What dose Surety Means?`,
  para2: `Surety refers to who assures that the principle can preform his task to the Oblige.`, 
  imgDirection: "left",
  background: false,
  cta:"Get a Quote",
  link:"/contact",
  lists: [
    { heading: `Why we need Bonds?`, para: `As a part of Construction Law; the project's owner needs some kind of surety that the contractor he is dealing with will preform and execute the contract. In this case; the contractors bond will provide such surety.` },
    { heading: `Do I need A bond to Activate My Contractor's License?`, para: `Yes, License ad Permit bonds are required by the State of California, as a prerequisites to receive the license or the permit. Such bonds functions as a guaranty from the Surety company to the governments that the contractor or the principle will preform his wok under the law and statute of the state.` },
    { heading: ``, para: `Weather you are in the Bay Area or not; if your doing business in California; Contact us today. At SaveGuard Insurance Agency we will help you protect the interests of your business, so bundle your commercial policies and bonds with SaveGuard and save today.` },
    { heading: `Call us 510-538-7233`, para: `` },
  ]
}
const Bonds = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <section>
    
      <ServiceImgContentList data={data} />
      <ContactSection isHome={false}/>
    </section>
  )
}

export default Bonds