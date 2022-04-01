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
    European program AQUACYCLE and aims to introduce users to the secrets of \
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
    "The official website of WQeMS, a European research project that aims to \
    provide emergency water quality monitoring services to water utilities."
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
    "A WebGIS Tool built with Django and PostgreSQL for applying multi-criteria analysis\
    using a stack of .tif layers."
)

const project5 = new WebProject(
    "5",
    "website",
    "Formula 1 Archive App",
    "https://formula1-322508.firebaseapp.com/",
    "f1.png",
    "angular",
    "",
    "firebase",
    "An experimental app that consumes an API and presents historical data from the F1 archives."
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
    flows for handling hyper-spectral cubes in the domain of proximal sensing of plant diseases."
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
    "A script for handling SUOMI-NPP-OMPS data and creating files that can be used as\
    input in the Surfer software."
)

const project8 = new WebProject(
    "8",
    "website",
    "dataanalyst.gr",
    "https://dataanalyst.gr",
    "da.png",
    "node",
    "",
    "",
    "A web app that offers a series of interactive infovisuals, data analysis tools and APIs."
)

const project9 = new WebProject(
    "9",
    "website",
    "ecothess.eu",
    "",
    "ecothess.png",
    "angular",
    "",
    "",
    "The official website of EcoThess, an initiative based in Thessaloniki."
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
  "In this paper, normalized word proximity networks have been used\
  as relational structures that contain stylometric information to solve\
  author attribution in two separate groups of Greek authors."
)

const project11 = new WebProject(
  "10",
  "paper-code",
  "Phased Array Antenna Optimization using Genetic Algorithm",
  "",
  "paa.png",
  "R",
  "",
  "",
  "A script in R, for optimizing the directivity, beamwidth and side-lobes of \
  a Phased Array Antenna, using a Genetic Algorithm."
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
PROJECTS.push(project11);
