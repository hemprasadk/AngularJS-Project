export class Reciepe {
  public name: string;
  public descrption: string;
  public imagepath: string;
  constructor(name:  string, desc: string, imangeURL: string )
  {
    this.name = name;
    this.descrption = desc;
    this.imagepath = imangeURL;
  }
}
