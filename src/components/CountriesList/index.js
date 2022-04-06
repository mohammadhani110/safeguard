import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    countryBox: {

        "& .list": {
            listStyle: "none",
            lineHeight: "1.75rem",
            marginBottom: "2rem"
        },
        "& .country": {
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginRight: ".5rem",
        },
        "& .city": {},
    },
}))
const data = [
    { country: "Alameda Country;", cities: " Oakland, San Leandro, San Lorenzo, Hayward, Castro Valey, Union City, Newark, Fremont, Pleasanton, Livermore, Dublin, Emeryville, Berkeley and Albany." },
    { country: "Contra Costa County;", cities: "Alamo, Antioch, Bay Point, Bethel Island, Brentwood, Byron, Clayton, Concord, Crockett, Danville, Discovery Bay, El Cerrito, El Sobrante, Hercules, Kensington, Knightsen, Lafayette, Martinez, Moraga, Oakley, Orinda, Pacheco, Pinole, Pittsburg, Richmond, Rodeo, San Pablo, San Ramon and Walnut Creek." },
    { country: "Marin County;", cities: " Belvedere Tiburon, Corte Madera, Fairfax, Greenbrae, Inverness, Kentfield, Larkspur, Mill Valley, Novato, San Anselmo, San Rafael, Sausalito, Terra Linda, Tiburon and surrounding communities." },
    { country: "Napa County;", cities: "Calistoga, Napa, Saint Helena, Angwin, Yountville, Deer Park, Oakville, Rutherford and Saint Helena." },
    { country: "San Mateo County;", cities: "Atherton, Belmont, Brisbane, Colma, Daly City, East Palo Alto, Foster City, Half Moon Bay, Hillsborough, Menlo Park, Millbrae, Pacifica, Portola Valley, Redwood City, San Bruno, San Carlos, San Mateo, South San Francisco and Woodside." },
    { country: "San Francisco County;", cities: "San Francisco." },
    { country: "Santa Clara County;", cities: "Alviso, Campbell, Cupertino, Gilroy, Los Altos, Los Gatos, Milpitas, Morgan Hill, Mountain View, Palo Alto, San Jose, Santa Clara, Saratoga and Sunnyvale." },
    { country: "Solano County;", cities: "American Canyon, Benicia, Dixon, Fairfield, Rio Vista, Suisun City, Vacaville and Vallejo." },
    { country: "Sonoma County;", cities: "Cloverdale, Cotati, Guerneville, Healdsburg, Penngrove, Petaluma, Rohnert Park, Santa Rosa, Sebastopol, Sonoma, Windsor and surrounding communities." },
    { country: "Yolo County;", cities: "Davis, Dunnigan, West Sacramento, Winters, Williams, Woodland, Yolo, Zamora and surrounding communities." },
];
const CountriesList = () => {
    const classes = useStyles()
    return (
        <Container>
            <ul className={classes.countryBox}>
                {data.map(({ country, cities }) => {
                    return (<li className='list'>
                        <span className='country'>{country}</span>
                        <span className='city'>{cities}</span>
                    </li>)
                })}
            </ul>

        </Container>
    )
}

export default CountriesList