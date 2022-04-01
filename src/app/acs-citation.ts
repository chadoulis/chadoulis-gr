import { number, string } from '@amcharts/amcharts4/core';

export abstract class ACSCitation {
    /**
     * 
     * @param referenceType can be: 
     * 'Journal Article'
     * 'Book'
     * 'Theses'
     * 'Patent'
     * 'Dataset'
     * 'Website'
     * 
     * 
     */
    constructor(public referenceType: string) {}
  }

  export class ACSConference extends ACSCitation {
    constructor(
      public authors: string[],
      public title: string,
      public doi: string,
      public proceedingsName: string,
      public year: number,
      public volume?: number,
      public inclusivePagination?: number[],
  
    ){
      super('Conference')
    }
  
    getAuthors(): string {
      var authorsFormatted = ''
      for (let author of this.authors) {
        authorsFormatted = authorsFormatted + author + '; '
      }
      return authorsFormatted.slice(0, -2)
      }
  
      getInclusivePagination(): string {
        if (this.inclusivePagination) {
          return `${this.inclusivePagination[0]} - ${this.inclusivePagination[1]}`
        } else {
          return ''
        }
      }
  
  }


  export class ACSPresentation extends ACSCitation {
    constructor(
      public authors: string[],
      public title: string,
      public doi: string,
      public proceedingsName: string,
      public year: number,
      public volume?: number,
      public inclusivePagination?: number[],
  
    ){
      super('Presentation')
    }
  
    getAuthors(): string {
      var authorsFormatted = ''
      for (let author of this.authors) {
        authorsFormatted = authorsFormatted + author + '; '
      }
      return authorsFormatted.slice(0, -2)
      }
  
  }