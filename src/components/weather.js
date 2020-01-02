import React from 'react';

const Weather =props => (
        <div>
            {
            props.weather.city &&
                 <div>
                    <p>Местоположение, {props.weather.city} {props.weather.country}</p> 
                    <p>Температура: {props.weather.temp}</p>
                    <p>Восход солнца: {props.weather.sunrise}</p>
                    <p>Закат солнца: {props.weather.sunset}</p>
                </div>
            }
    <p>{props.weather.error}</p>
        </div>
    );

export default Weather;