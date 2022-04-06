import React from 'react'
import { makeStyles } from '@mui/styles'
import about from "../assets/about.png"

import ImgContentLayout from '../components/ImgContentLayout'
import ServiceImgContentList from '../components/ServicesLayout/ServiceImgContentList'
import ContactSection from '../components/ContactSection'
import ServiceImgContent from '../components/ServicesLayout/ServiceImgContent'
import ServiceImgContentExample from '../components/ServicesLayout/ServiceImgContentExample'

const useStyles = makeStyles((theme) => ({
  newsLetter: {
    background: theme.palette.background.default,
    padding: "7rem 0",
    height: "500px",

  },
}))
const data = {
  image: about,
  title: "Insurance For Your Store and Business",
  para: `Eliminate risks and protect your business! if your business is located any where in the bay area, our agents will be more than happy to come to your business and offer you the best coverage for your money. if you dont have a general liability insurance, then you need to contact us NOW, and we will guide you and protect you while saving your money.if you already have Insurance, then our agents would be more than welcome to come to you and review your insurance limits with you For FREE. but you need to call us NOW. at least you need to have a minimum liability Insurance. Our list of companies are
  1. the Travelers
  2.Titan
  3.Topa insurance
  4.Cres Program
  and many others`, 
  imgDirection: "right",
  background: true,
  cta:"Get Auto Quote",
}
const data4 = {
  image: about,
  title: "Restaurants, Grills and Bars.",
  para: `As a business owner, you are concern about the protection of your business against Fire,theft,water Damage and Law Suits. our business insurance agents will be pleased to stop by your business to review your existing policy with you and explain the coverage you are having, in addition as it happens most of the time we will find you a better coverage, and will cut the price.
  our experiance agents have been dealing with restaurants bars and grills for a long time, we know the exact needs of your business, we know what coverage to increase and what to eliminate.
  thus for your business sake, call us at 510-538-7233`, 
  imgDirection: "left",
  background: false,
  cta:"Get Auto Quote",
}
const data5 = {
  image: about,
  title: "TRUCKING, Commercial AUTO and Cargo Insurance",
  para: `if your using your car for business then you need a commercial Insurance. whatever the risks our highly trained agents will find the best price as low as $70/month for a liability limit of 1 Million.`,

  para2: `to get a quote Please text us the following at 805-294-2092
  1.Driver License.
  2.Vin Number.
  3.DBA of Business.
  3.Nature OF business.
  
  if its a fleet of more than 4 Trucks, you can call us at 510-538-7233 to scheduled an appointment with our agent, or have him meet you at the location of your business.`, 
  imgDirection: "right",
  background: true,
  cta:"Get Auto Quote",
}
const data6 = {
  image: about,
  title: "Limos Insurance",
  para: `our first option for your Limo will be Zurich. then The Hartford. if you like their rats after applying all the possible discount. we will make sure Your Happy with the price.`, 
  para2: `thus if you are searching for a limo insurance, you found the right place.`, 
  para3: `if your trying to start a limo business, we will help you get the License plate and will offer our DMV service to get your Business rolling as soon as possible.thus don't hesitate, call us at 510-538-7233`, 

  imgDirection: "right",
  background: true,
  cta:"Get Quote",
}
const data7 = {
  image: about,
  title: "Ice Cream truck Insurance",
  para: `the city requires each Ice cream truck to have insurance with a certain limit and to be added in the policy as an additional insured.
        contacting US for your Ice cream truck insurance will save you from all these details.`, 
  para2: `stop by our Office at 22576 Mission blvd, Hayward, CA, 94541
        having an experience in this business can save you a lot of money on Insurance, but if your just starting your business, we can definitely beat any other prices in the market.`, 
  para3: `Call us Now at 510-538-7233 and we will help you with city filing and Insurance.`, 

  imgDirection: "left",
  background: false,
  cta:"Get Quote",
}
const data2 = {
  image: about,
  title: `Contractors and Business Bonds || Dealers and DMV Bonds  `,
  heading: `What is a Surety Bond?`,
  para: `A surety bond is a promise to pay one party " the Obligee" a certain amount of money usually the bond amount; if the Principal fails to meet his obligation. Thus protecting the oblige against losses caused by the principle.`,
  heading2: `What dose Surety Means?`,
  para2: `Surety refers to who assures that the principle can preform his task to the Oblige.`, 
  imgDirection: "left",
  background: false,
  cta:"Get a Quote",
  lists: [
    { heading: `Why we need Bonds?`, para: `As a part of Construction Law; the project's owner needs some kind of surety that the contractor he is dealing with will preform and execute the contract. In this case; the contractors bond will provide such surety.` },
    { heading: `Do I need A bond to Activate My Contractor's License?`, para: `Yes, License ad Permit bonds are required by the State of California, as a prerequisites to receive the license or the permit. Such bonds functions as a guaranty from the Surety company to the governments that the contractor or the principle will preform his wok under the law and statute of the state.` },
    { heading: ``, para: `Weather you are in the Bay Area or not; if your doing business in California; Contact us today. At SaveGuard Insurance Agency we will help you protect the interests of your business, so bundle your commercial policies and bonds with SaveGuard and save today.` },
    { heading: `Call us 510-538-7233`, para: `` },
  ]
}
const data3 = {
  image: about,
  title: "TRUCKING, Commercial AUTO and Cargo Insurance",
  heading: "",
  para: `if your using your car for business then you need a commercial Insurance. whatever the risks our highly trained agents will find the best price as low as $70/month for a liability limit of 1 Million.`,
  para2: `to get a quote Please text us the following at 805-294-2092
  1.Driver License.
  2.Vin Number.
  3.DBA of Business.
  3.Nature OF business.`,
  para3: `if its a fleet of more than 4 Trucks, you can call us at 510-538-7233 to scheduled an appointment with our agent, or have him meet you at the location of your business.`,
  imgDirection: "right",
  background: true,
  cta:"Get Quote",
  lists: [
    { heading: `HO2 – Broad Form Homeowner Policy`, para: `A more advanced form that provides coverage on a home against 17 listed perils (including all 11 on the HO1). The coverage is usually a "named perils" policy, which lists the events that would be covered.` },
    { heading: `HO3 – Special Form Homeowner Policy`, para: `The typical, most comprehensive form used for single-family homes. The policy provides "all risk" coverage on the home with some perils excluded, such as earthquake and flood. Contents are covered on a named peril basis. (Note: "All Risk" is poorly termed as it is essentially named exclusions (ie, if it is not specifically excluded, it is covered))` },
    { heading: `HO4 – Renter's Insurance`, para: `The "Tenants" form is for renters.It covers personal property against the same perils as the contents portion of the HO2 or HO3. An HO4 generally also includes liability coverage for personal injury or property damage inflicted on others.` },    
    { heading: `HO5 - Premier Homeowner Policy`, para: `Covers the same as HO3 plus more. On this policy the contents are covered on an open peril basis, therefore as long as the cause of loss is not specifically excluded in the policy it will be covered for that cause of loss. (can also be achieved by endorsing an HO15 to the HO3)` },
    { heading: `HO6 – Condominium Policy`, para: `The form for condominium owners.` },  
    { heading: `HO8 – Older Houses`, para: `The "Modified Coverage" form is for the owner-occupied older home whose replacement cost far exceeds the property's market value.` },
  ]
}
const Bonds = () => {
  const classes = useStyles()
  return (
    <section>
      {/* <ImgContentLayout data={data} />
      <ImgContentLayout data={data4} />
      <ImgContentLayout data={data5} /> */}
      <ServiceImgContentList data={data2} />
      {/* <ImgContentLayout data={data6} />
      <ImgContentLayout data={data7} /> */}
      <ContactSection isHome={false}/>
      {/* <ServiceImgContentExample data={data3} /> */}
    </section>
  )
}

export default Bonds