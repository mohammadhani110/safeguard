import React from 'react'
import { makeStyles } from '@mui/styles'
import ServiceImgContent from '../components/ServicesLayout/ServiceImgContent'
import about from "../assets/about.png"
import ServiceImgContentList from '../components/ServicesLayout/ServiceImgContentList'
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
  title: "Auto Insurance",
  title2: "Coverage for damage to your Auto",
  subTitle: "About Us",
  para: `Vehicle insurance is insurance purchased for cars, trucks and motorcycles. The minimum requirement by the law in the state of California is 15/30/5. which means $15,000 for bodily injury per person, $30,000 for bodily injury per accident, $5,000 for property damage per occurrence. If for example two people where to be injured in an accident caused by the insured one injury was $18,000 while the other was $12,000, the insured will have to pay $2,000. 
  Thus it is our duty at SaveGuard insurance agency to advise our clients of the type of risks which comes along a state requirement liability insurance. 
  California's law require individuals to carry proof of insurance in the event of an accident causing bodily injury or property damage of $5000 or more, and when a person seeks vehicle registration and renewal, or when requested by a police officer.`,
  para2: `the physical damage coverage of your Insurance policy covers the damage which occurred to your vehicle which might be "Collisional damage" or "Other than Collision".
  Collision means, any upset of your covered Auto, or impact with another vehicle or object. While Other than Collision means any damage to your vehicle other than collision, such coverages specifically mentioned in the policy includes missiles, falling objects, fire, theft, explosion, earthquake, windstorm, hail, water, flood, vandalism, contact with bird or animal, etc.
  one of the benefits of being in the family of SaveGuard is to have an agent explaining to you all the coverages in your insurance policy, why! because it is simple people with better understanding are better protected and that is what SaveGuard is all about.`,
  imgDirection: "right",
  background: true,
  cta:"Get Auto Quote",
}
const data2 = {
  image: about,
  title: "Homeowner and Rental Insurance",
  heading: "HO1 – Basic Form Homeowner Policy",
  para: `A basic policy form that provides coverage on a home against 11 listed perils; contents are generally included in this type of coverage, but must be explicitly enumerated. The perils include fire or lightning, windstorm or hail, vandalism or malicious mischief, theft, damage from vehicles and aircraft, explosion riot or civil commotion, glass breakage, smoke, volcanic eruption, and personal liability. Exceptions include floods, earthquakes. Most states no longer offer this type of coverage.`,
  imgDirection: "left",
  background: false,
  cta:"Get a Home Quote",
  lists: [
    { heading: `HO2 – Broad Form Homeowner Policy`, para: `A more advanced form that provides coverage on a home against 17 listed perils (including all 11 on the HO1). The coverage is usually a "named perils" policy, which lists the events that would be covered.` },
    { heading: `HO3 – Special Form Homeowner Policy`, para: `The typical, most comprehensive form used for single-family homes. The policy provides "all risk" coverage on the home with some perils excluded, such as earthquake and flood. Contents are covered on a named peril basis. (Note: "All Risk" is poorly termed as it is essentially named exclusions (ie, if it is not specifically excluded, it is covered))` },
    { heading: `HO4 – Renter's Insurance`, para: `The "Tenants" form is for renters.It covers personal property against the same perils as the contents portion of the HO2 or HO3. An HO4 generally also includes liability coverage for personal injury or property damage inflicted on others.` },    
    { heading: `HO5 - Premier Homeowner Policy`, para: `Covers the same as HO3 plus more. On this policy the contents are covered on an open peril basis, therefore as long as the cause of loss is not specifically excluded in the policy it will be covered for that cause of loss. (can also be achieved by endorsing an HO15 to the HO3)` },
    { heading: `HO6 – Condominium Policy`, para: `The form for condominium owners.` },  
    { heading: `HO8 – Older Houses`, para: `The "Modified Coverage" form is for the owner-occupied older home whose replacement cost far exceeds the property's market value.` },
  ]
}
const data3 = {
  image: about,
  title: "Personal Umbrella Insurance",
  heading: "For Example",
  para: `Umbrella is an extra level of protection; a liability insurance that is in excess of specified other polices . when you are liable to someone; the insured's primary policy will pay up to their limits, and any additional amount will be paid by your Umbrella policy up to its limit.`,
  para2: `You have an auto policy that covers up to 1 million; you own a house and you decide to buy an Umbrella policy to protect your assets, so you end up purchasing a 5 million dollars Umbrella policy. now if an accident occur, your auto insurance policy will pay up to 1 million, if additional money is needed; instead of trying to take your property, business. your umbrella policy will pay Up to 5 million Dollars.`,
  para3: `The price of Umbrella is cheap if you look at the amount of protection which offers.Thus we encourage all of our customer to get this level of protection.`,
  imgDirection: "right",
  background: true,
  cta:"Get Personal Umbrella Quote",
  lists: [
    { heading: `HO2 – Broad Form Homeowner Policy`, para: `A more advanced form that provides coverage on a home against 17 listed perils (including all 11 on the HO1). The coverage is usually a "named perils" policy, which lists the events that would be covered.` },
    { heading: `HO3 – Special Form Homeowner Policy`, para: `The typical, most comprehensive form used for single-family homes. The policy provides "all risk" coverage on the home with some perils excluded, such as earthquake and flood. Contents are covered on a named peril basis. (Note: "All Risk" is poorly termed as it is essentially named exclusions (ie, if it is not specifically excluded, it is covered))` },
    { heading: `HO4 – Renter's Insurance`, para: `The "Tenants" form is for renters.It covers personal property against the same perils as the contents portion of the HO2 or HO3. An HO4 generally also includes liability coverage for personal injury or property damage inflicted on others.` },    
    { heading: `HO5 - Premier Homeowner Policy`, para: `Covers the same as HO3 plus more. On this policy the contents are covered on an open peril basis, therefore as long as the cause of loss is not specifically excluded in the policy it will be covered for that cause of loss. (can also be achieved by endorsing an HO15 to the HO3)` },
    { heading: `HO6 – Condominium Policy`, para: `The form for condominium owners.` },  
    { heading: `HO8 – Older Houses`, para: `The "Modified Coverage" form is for the owner-occupied older home whose replacement cost far exceeds the property's market value.` },
  ]
}
const PersonalInsurance = () => {
  const classes = useStyles()
  return (
    <section>
      <ServiceImgContent data={data} />
      <ServiceImgContentList data={data2} />
      <ServiceImgContentExample data={data3} />
    </section>
  )
}

export default PersonalInsurance