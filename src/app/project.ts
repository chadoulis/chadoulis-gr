export abstract class AbstractProject {
}

export class WebProject extends AbstractProject {

constructor(
    public id: string,
    public category: string,
    public name: string,
    public url: string,
    public img: string,
    public tech: string,
    public tech2: string,
    public tech3: string,
    public description: string
){
    super();
}
}