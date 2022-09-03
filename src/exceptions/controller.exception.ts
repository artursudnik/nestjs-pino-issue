export class ControllerException extends Error {
  constructor(message?: string) {
    super(message);
    this.initName();
  }

  public initName(): void {
    this.name = this.constructor.name;
  }
}
