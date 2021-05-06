import { ISubject } from "./ISubject.interface"

export class WeatherStationSubject extends ISubject {
  temp: number

  constructor() {
    super()
    this.temp = 0
  }

  changeData(): void {
    this.temp += 1
    this.observers.forEach((el) => {
      el.update()
    })
  }


  get getTempData(): number{
      return this.temp;
  }
}
