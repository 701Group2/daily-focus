import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCloud,
    faCloudMoon,
    faCloudMoonRain,
    faCloudSun,
    faCloudSunRain,
    faCloudShowersHeavy,
    faBolt,
    faSnowflake,
    faSun,
    faSmog,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from "./style.module.scss";

// The icon labels retrieved from the API are matched up with icons
// 'n' means night and 'd' means day
const weatherIcon = {
    // Thunderstorm
    "11d": <FontAwesomeIcon icon={faBolt} className={styles.faColor} />,
    "11n": <FontAwesomeIcon icon={faBolt} className={styles.faColor} />,

    // Rain
    "10d": <FontAwesomeIcon icon={faCloudShowersHeavy} className={styles.faColor} />,
    "10n": <FontAwesomeIcon icon={faCloudShowersHeavy} className={styles.faColor} />,

    // Light Rain/Showers
    "09d": <FontAwesomeIcon icon={faCloudSunRain} className={styles.faColor} />,
    "09n": <FontAwesomeIcon icon={faCloudMoonRain} className={styles.faColor} />,

    // Snow
    "13d": <FontAwesomeIcon icon={faSnowflake} className={styles.faColor} />,
    "13n": <FontAwesomeIcon icon={faSnowflake} className={styles.faColor} />,

    // Atmosphere
    "50d": <FontAwesomeIcon icon={faSmog} className={styles.faColor} />,
    "50n": <FontAwesomeIcon icon={faSmog} className={styles.faColor} />,

    // Clear Sky
    "01d": <FontAwesomeIcon icon={faSun} className={styles.faColor} />,
    "01n": <FontAwesomeIcon icon={faMoon} className={styles.faColor} />,

    // Cloudy
    "04d": <FontAwesomeIcon icon={faCloud} className={styles.faColor} />,
    "04n": <FontAwesomeIcon icon={faCloud} className={styles.faColor} />,

    // Partly Cloudy
    "02d": <FontAwesomeIcon icon={faCloudSun} className={styles.faColor} />,
    "02n": <FontAwesomeIcon icon={faCloudMoon} className={styles.faColor} />,
    "03d": <FontAwesomeIcon icon={faCloudSun} className={styles.faColor} />,
    "03n": <FontAwesomeIcon icon={faCloudMoon} className={styles.faColor} />,
};

function Icon({ icon }) {
    return <div>{weatherIcon[icon]}</div>;
}

Icon.propTypes = {
    icon: PropTypes.string,
};

export default Icon;
