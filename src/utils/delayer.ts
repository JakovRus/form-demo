export class Delayer {
  private timer: number = -1;
  private delay: number = 500;

  public call = (callback: Function) => {
    this.timer = setTimeout(callback, this.delay)
  };

  public clear = () => {
    clearTimeout(this.timer);
  };

  public setDelay = (delay: number) => {
    this.delay = delay;
  }
}