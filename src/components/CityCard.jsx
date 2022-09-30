const CityCard = ({ cityInfo }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexDirection: "column" }}>
                <h3>{cityInfo.city.name}</h3>
                <h3>{cityInfo.list.dt}</h3>
                <h3>{cityInfo.list.dt_txt}</h3>
            </div>
            <div style={{ flexDirection: "column" }}>
                {cityInfo.city.lits.weather.icon}
            </div>
            <div style={{ flexDirection: "column" }}>
                {Math.trunc(cityInfo.city.list.main.temp)}°
            </div>
        </div>
    );
};

export default CityCard;
