export default class language {
  private code: string;
  private name: string;
  private font: string;

  constructor(code: string, name: string, font: string) {
    this.code = code;
    this.name = name;
    this.font = font;
  }

  public getCode(): string {
    return this.code;
  }

  public getName(): string {
    return this.name;
  }

  public getFont(): string {
    return this.font;
  }
}
