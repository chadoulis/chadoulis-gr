import {ACSConference, ACSPresentation } from './acs-citation';


export const ACS_REFERENCE_LIST: (ACSConference | ACSPresentation)[] = []




const conf_1 = new ACSConference(
    ['RT, Chadoulis', 'AF, Bais'],
    "Determination of uncertainty in hourly and daily averages of solar irradiance due to missing measurements",
    "10.1063/1.5091276",
    "AIP Conference Proceedings",
    2018,
    2075,
    [120018,120018]
)

const pres_1 = new ACSPresentation(
    ['P Giannakeris', 'P Bassia', 'N Kilis', 'RT Chadoulis', 'Ioannis Pitas'],
    "Fast 1D Convolution Algorithms",
    "https://icarus.csd.auth.gr/wp-content/uploads/2020/08/13-Fast-1D-convolution-algorithms.pdf",
    "Icarus Drone Research Team",
    2020,
    2075,
    [120018,120018]
)

const conf_2 = new ACSConference(
    ['M. Banti', 'E. Katsikis'],
    "Employing Land Surface Phenology for the assessment of forest gain and loss around Lake Sevan in Armenia and Kolkheti lowlands in Georgia",
    "10.1063/1.5091276",
    "Living Planet 2022",
    2022,
    2075,
    [120018,120018]
)

const conf_3 = new ACSConference(
    ['RT, Chadoulis', 'C. Kotropoulos'],
    "Authorship Attribution using Word Adjacency Networks",
    "10.1063/1.5091276",
    "SETN 2022",
    2022,
    2075,
    [120018,120018]
)

ACS_REFERENCE_LIST.push(conf_1);
ACS_REFERENCE_LIST.push(pres_1);
ACS_REFERENCE_LIST.push(conf_2);
ACS_REFERENCE_LIST.push(conf_3);
