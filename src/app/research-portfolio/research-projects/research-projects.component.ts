import { Component, OnInit } from '@angular/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-research-projects',
  templateUrl: './research-projects.component.html',
  styleUrls: ['./research-projects.component.scss']
})
export class ResearchProjectsComponent implements OnInit {

  faGlobe: any = faGlobe;
  projects = [
    {
      title: 'AQUACYCLE',
      description: 'AQUACYCLE - Towards Sustainable Treatment \
      and Reuse of Wastewater in the Mediterranean Region aims \
      to bring an eco-innovative wastewater treatment technology that \
      will consist of anaerobic digestion, constructed wetlands and solar \
      treatment for the cost-effective treatment of urban wastewater with \
      minimal costs of operation and maximum environmental benefits. ',
      img: 'aquacycle.png'
    },{
      title: 'EOTIST',
      description: 'Earth Observation Training in Science and Technology (EOTiST) aims to enhance the Science and \
      Technology capacity of the Space Research Centre of the Polish Academy of Sciences (CBK PAN) and to achieve \
      excellence in research of EO products’ assimilation in the ecosystem assessment and monitoring by starting \
      close collaboration with 3 European centres of excellence: CERTH, CREAF, CNR.',
      url: 'https://www.enicbcmed.eu/projects/aquacycle/',
      dates: '01/03/2021 - 31/07/2022',
      img: 'eotist.png'
    },{
      title: 'MEDWAYCAP',
      description: 'The MEDiterranean pathWAY for innovation CAPitalisation toward an\
      urban-rural integrated development of non-conventional water resources aims to \
      embrace the non-conventional water reuse and management in the Mediterranean \
      region through the promotion of sustainable strategies and technological innovations',
      url: 'https://www.enicbcmed.eu/projects/aquacycle/',
      dates: '01/05/2020 - 31/02/2021',
      img: 'medwaycap.png'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}

