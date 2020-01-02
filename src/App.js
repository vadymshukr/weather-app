import React from 'react';
import Form from './components/form';
import Weather from './components/weather';
import Info from './components/info';

const API_KEY = "0a6c369a4721e11a32b9d5b4220df071";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      const time = ms =>{
        const date = new Date(ms*1000);
        const hours = String(date.getHours()).padStart(2,'0');
        const minutes = String(date.getMinutes()).padStart(2,'0');
        const seconds = String(date.getSeconds()).padStart(2,'0');
        return `${hours}:${minutes}:${seconds}`
      }
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: time(data.sys.sunrise),
        sunset: time(data.sys.sunset),
        error: undefined
      });
    } else{
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      });
    }
  }

  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod = {this.gettingWeather}/>
                <Weather 
              weather = {this.state}
            />
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;