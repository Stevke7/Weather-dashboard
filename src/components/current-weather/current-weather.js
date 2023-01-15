import "./current-weather.css";
import { useEffect } from "react";

const CurrentWeather = ({ data }) => {
	useEffect(() => {
		const link =
			document.querySelector("link[rel*='icon']") ||
			document.createElement("link");
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = `icons/${data.weather[0].icon}.png`;
		document.getElementsByTagName("head")[0].appendChild(link);
	}, []);

	return (
		<div className="weather">
			<div className="top">
				<div>
					<p className="city">{data.city}</p>
					<p className="weather-description">{data.weather[0].description}</p>
				</div>
				<img
					alt="weather"
					className="weather-icon"
					src={`icons/${data.weather[0].icon}.png`}
				></img>
			</div>
			<div className="bottom">
				<p className="temp">{Math.round(data.main.temp)}°C</p>
				<div className="details">
					<div className="parameter-row">
						<span className="parameter-label">Details</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Feels like</span>
						<span className="parameter-value">
							{Math.round(data.main.feels_like)}°C
						</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Wind</span>
						<span className="parameter-value">{data.wind.speed} m/s</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Humidity</span>
						<span className="parameter-value">{data.main.humidity}%</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Pressure</span>
						<span className="parameter-value">{data.main.pressure} hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
