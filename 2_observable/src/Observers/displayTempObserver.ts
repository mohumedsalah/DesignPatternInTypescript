import { WeatherStationSubject } from "../Subject/weatherStationSubject"
import { IObserver } from "./IObserver.interface"

export class DisplayTempObserver implements IObserver {
  constructor(private subject: WeatherStationSubject) {
    subject.registerObserver(this)
  }
  update(): void {
    console.log("value of temp updated to : " + this.subject.getTempData)
  }

  endReceiveNotify() {
    this.subject.removeObserver(this)
  }

  subscript(station: WeatherStationSubject) {
    this.subject = station
    station.registerObserver(this)
  }
}
