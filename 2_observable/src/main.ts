import { DisplayTempObserver } from "./Observers/displayTempObserver";
import { WeatherStationSubject } from "./Subject/weatherStationSubject";

console.log("hello from the other side.")


const weatherStation = new WeatherStationSubject();

const display = new DisplayTempObserver(weatherStation);

weatherStation.changeData()

weatherStation.changeData()
weatherStation.changeData()
weatherStation.changeData()

display.endReceiveNotify();


weatherStation.changeData()
weatherStation.changeData()