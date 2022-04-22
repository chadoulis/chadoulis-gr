import { WebProject } from './project';

export const PROJECTS: WebProject[]=[];

const project1 = new WebProject(
    "1",
    "website",
    "Brain Balance Consulting",
    "www.brainbalance.gr",
    "bbc4.png",
    "angular",
    "universal",
    "firebase",
    "Brain Balance is a company that provides a wide range of services, from \
    Counseling Psychology and Psychotherapy, School Psychology, Couples Counseling \
    to Life Coaching & Mentoring, Business Coaching and Sales Counseling services."
)

const project2 = new WebProject(
    "2",
    "website",
    "AQUACYCLE E-Training Platform",
    "https://etraining-aquacycle.eu/",
    "aquacycle.png",
    "angular",
    "",
    "firebase",
    "An educational platform, designed and developed in the framework of the \
    European program AQUACYCLE (Towards Sustainable Treatment and Reuse of Wastewater in the Mediterranean Region) and aims to introduce users to the secrets of \
    APOC technology."
)

const project3 = new WebProject(
    "3",
    "website",
    "WQeMS Official Website",
    "https://wqems.eu/",
    "wqems.png",
    "angular",
    "",
    "firebase",
    "The official website of WQeMS (Copernicus Assisted Lake Water Quality Emergency Monitoring Service), a research project that aims to \
    provide emergency water quality monitoring services to the water utilities industry."
)

const project4 = new WebProject(
    "4",
    "website",
    "WebGIS Irrigation Suggestion Tool",
    "www.brainbalance.gr",
    "webgis.png",
    "django",
    "",
    "",
    "A WebGIS Tool for Irrigation Suggestion in three Pilot Areas, located in Lebanon, Spain and Tunisia. The tool is built with Django and PostgreSQL for applying multi-criteria analysis\
    using a stack of .tif layers. (Elevation, Slope, Land Cover etc.)"
)

const project5 = new WebProject(
    "5",
    "website",
    "Formula 1 Historical Archive Dashboard",
    "https://formula1-322508.firebaseapp.com/",
    "f1.png",
    "angular",
    "",
    "firebase",
    "An experimental app that consumes the Ergast Developer API, an \
    experimental web service which provides a historical record of data \
    for the Formula One series, from the beginning of the world championships in 1950 for non-commercial purposes."
)

const project6 = new WebProject(
    "6",
    "paper-code",
    "hyperspectralCube (python package)",
    "https://formula1-322508.firebaseapp.com/",
    "hyperspectral.png",
    "python",
    "",
    "",
    "This project aims to provide researchers with a series of compact and easy-to-use work \
    flows for handling hyper-spectral cubes in the domain of proximal sensing of plant diseases. The outputs\
    can be used for training neural networks for plant disease detection."
)

const project7 = new WebProject(
    "7",
    "script",
    "Handling SUOMI-NPP-OMPS data",
    "https://formula1-322508.firebaseapp.com/",
    "suomi.png",
    "fortran",
    "",
    "",
    "A Fortran script for handling Ozone Mapping and Profiler Suite (OMPS) data, acquired from the Suomi National Polar-orbiting Partnership (Suomi NPP) and creating a file hierarchy that can be used as\
    input in the Surfer software for producing meaningful infovisuals."
)

const project8 = new WebProject(
    "8",
    "website",
    "dataAnalyst: A Data Analysis Platform",
    "https://dataanalyst.gr",
    "da.png",
    "node",
    "",
    "",
    "A web app that offers a series of interactive infovisuals, data analysis tools, geospatial analysis capabilities and APIs\
    and a blog featuring young data scientists. This web app was built with NodeJS and deployed in a Digital Ocean Dropplet."
)

const project9 = new WebProject(
    "9",
    "website",
    "Ecothess Official Website",
    "",
    "ecothess.png",
    "angular",
    "",
    "",
    "Ecothess is a team of young scientists, \
    aiming to the strengthening of sustainability in Thessaloniki, Greece. Its main objectives are to raise public awareness \
    and citizens’ participation towards social and environmental challenges."
)

const project10 = new WebProject(
  "10",
  "paper-code",
  "Authorship Attribution using WANs",
  "",
  "authorship-attribution.png",
  "matlab",
  "",
  "",
  "In this paper, normalized word proximity networks were used\
  as relational structures that contain stylometric information for\
  author attribution in Greek literature. This method was originally proposed by Segarra, Eisen,\
  and Ribeiro."
)

const project11 = new WebProject(
  "10",
  "paper-code",
  "PAA Optimization using GA",
  "",
  "paa.png",
  "R",
  "",
  "",
  "A script in R, for optimizing the directivity, beamwidth and side-lobes of \
  a Phased Array Antenna, using a Genetic Algorithm. This script was originaly developed for\
  my dissertation for my MSc in Communication Networks and Systems Security."
)

const project12 = new WebProject(
  "12",
  "website",
  "chadoulis.gr",
  "",
  "chiro.png",
  "angular",
  "universal",
  "firebase",
  "This website was developed as a platform for showcasing my projects, disseminating my research and enterpreneurial efforts, distributing technical articles and tutorials and sharing my views."
)

const project13 = new WebProject(
  "12",
  "website",
  "Let's Park Crowdsourcing App",
  "",
  "lets-park.png",
  "angular",
  "universal",
  "firebase",
  "'Let's Park' is a crowdsourcing platform that connects groups \
  of citizens and Municipalities with the Environmental Social Activation (ESG) \
  program of companies for the co-design and implementation of pocket-parks. (CrowdPolicy Sustainability Hackathon)"
)

PROJECTS.push(project1);
PROJECTS.push(project2);
PROJECTS.push(project3);
PROJECTS.push(project4);
PROJECTS.push(project5);
PROJECTS.push(project6);
PROJECTS.push(project7);
PROJECTS.push(project8);
PROJECTS.push(project9);
PROJECTS.push(project10);
PROJECTS.push(project13);
PROJECTS.push(project11);
PROJECTS.push(project12);

