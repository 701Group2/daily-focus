import React, { useState, useEffect } from "react";
import DayCard from "./DayCard";
import HourCard from "./HourCard";
import Icon from "./Icon";
import { getWeatherData, getLocationData } from "./WeatherService";
import styles from "./style.module.scss";

const AUCKLAND_COORDS = { lat: -36.85, lon: 174.76 };

function Weather() {
    const [icon, setIcon] = useState(null);
    const [main, setMain] = useState(null);
    const [temp, setTemp] = useState(null);
    const [maxTemp, setMaxTemp] = useState(null);
    const [minTemp, setMinTemp] = useState(null);
    const [dailyData, setDailyData] = useState([]);
    const [hourlyData, setHourlyData] = useState([]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [isError, setIsError] = useState(false);

    const formatDayCards = (dailyData) => {
        return dailyData.map((day, index) => <DayCard day={day} key={index} />);
    };

    const formatHourCards = (hourlyData) => {
        let hourArray = hourlyData.map((hour, index) => <HourCard hour={hour} key={index} />);
        return hourArray;
    };

    const getData = (lat, lon) => {
        getWeatherData(
            lat,
            lon,
            setIcon,
            setMain,
            setTemp,
            setMaxTemp,
            setMinTemp,
            setDailyData,
            setHourlyData,
            setIsError
        );
        getLocationData(lat, lon, setCity, setCountry, setIsError);
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getData(lat, lon);
                },
                // Permission not given to access location, so default to Auckland coordinates
                function onError() {
                    getData(AUCKLAND_COORDS.lat, AUCKLAND_COORDS.lon);
                }
            );
        } else {
            getData(AUCKLAND_COORDS.lat, AUCKLAND_COORDS.lon);
        }
    }, []);

    return (
        <div className={styles.weatherWidget}>
            <div className={styles.container}>
                <div className={styles.headerRectangle}>
                    <div className={styles.weatherTextBox}>Weather</div>
                </div>
                {!isError ? (
                    <div className={styles.content}>
                        <div className={styles.currentWeatherBox}>
                            <div className={styles.iconContainer}>
                                <Icon icon={icon} />
                            </div>
                            <div className={styles.description}>
                                <div className={styles.weatherNZ}>
                                    {main} | {city}, {country}
                                </div>
                                <div className={styles.temp}>{temp}°C</div>
                                <div className={styles.tempBounds}>
                                    L:{minTemp}°C | H:{maxTemp}°C
                                </div>
                            </div>
                        </div>
                        <div className={styles.hourlyForecast}>{formatHourCards(hourlyData)}</div>
                        <div className={styles.dailyForecast}>{formatDayCards(dailyData)}</div>
                    </div>
                ) : (
                    <div className={styles.errorContainer}>Can not retrieve weather</div>
                )}
            </div>
        </div>
    );
}

export default Weather;
