export abstract class AbstractDocument {}

export class Document extends AbstractDocument {
  constructor(
    public name: string,
    public url: string
    ) {
    super();
  }
}
