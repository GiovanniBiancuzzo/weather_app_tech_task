export const switchGradient = (icon) => {
    switch (icon) {
        case "01d":
        case "01n":
            return "mainGradientClear";
        case "02d":
        case "02n":
        case "03d":
        case "03n":
        case "04d":
        case "04n":
        case "50d":
        case "50n":
            return "mainGradientClouds";
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return "mainGradientRain";
        case "11d":
        case "11n":
            return "mainGradientThunder";
        case "13d":
        case "13n":
            return "mainGradientSnow";
        default:
            return "mainGradient";
    }
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
