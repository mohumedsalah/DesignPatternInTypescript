import { IObserver } from "../Observers/IObserver.interface"

export abstract class ISubject {
  protected observers: IObserver[]

  constructor() {
    this.observers = new Array<IObserver>()
  }

  abstract changeData(): void

  registerObserver(one: IObserver): void {
    this.observers.push(one)
  }
  removeObserver(one: IObserver): void {
    let index = this.observers.indexOf(one)
    if (index === -1) return
    this.observers.splice(index, 1)
  }
}
