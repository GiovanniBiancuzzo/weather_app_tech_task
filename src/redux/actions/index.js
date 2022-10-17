export const SET_QUERY = 'SET_QUERY';
export const SET_ACTUAL_CITY = 'SET_ACTUAL_CITY';
export const GET_WEATHER_INFOS = 'GET_WEATHER_INFOS';
export const LOADING = 'LOADING';
export const LOADING_ERROR = 'LOADING_ERROR';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ACCEPTED_COOKIES = 'ACCEPTED_COOKIES';
export const ADD_ERROR = 'ADD_ERROR';

const weatherInfosApi = process.env.REACT_APP_OPENWEATHER_API;
const reverseGeolocationApi = process.env.REACT_APP_OPENWEATHER_REVERSE_API;
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const setQueryAction = (query) => ({
    type: SET_QUERY,
    payload: query
});

export const setActualCityAction = (data) => ({
    type: SET_ACTUAL_CITY,//setta città come attuale
    payload: data
});

export const getGeolocationAction = (lat, lon) => {
    return (dispatch, getState) => {
        fetch(
            `${reverseGeolocationApi}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        ) //attraverso il reverse coding dell'api, otteniamo il nome della città come query di ricerca
            .then((result) => result.json())
            .then((data) =>
                dispatch(getWeatherInfosAction(data[0].name))
            )
            .catch((error) => console.log(error));
    };
};

export const getCityWeatherAction = (data) => ({
    type: GET_WEATHER_INFOS,
    payload: data
});

export const getWeatherInfosAction = (query) => {
    return (dispatch, getState) => {
        const finalQuery = query.charAt(0).toUpperCase() + query.slice(1);//preparo la stringa per essere confrontata 
        const cities = getState().weatherInfos.history;//recupero la lista delle città già conservate nello store
        dispatch(setQueryAction(finalQuery));//conservo la citta nella query di ricerca
        if (Object.keys(cities).includes(finalQuery)) {//controllo se è una citta già cercata
            dispatch(setActualCityAction(cities[finalQuery])); //se è già stata cercata, la estraggo dall'elenco delle città nello store e la setto come città attuale
        } else {
            fetch(`${weatherInfosApi}q=${finalQuery}&appid=${apiKey}&units=metric`, { //se non è stata già cercata, effettuo una fetch
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    fetch(
                        `https://api.unsplash.com/search/photos?query=${data.city.name}&client_id=UzF58mZxjYRKuAQVQcixdSy4BVlF0XuQlHRCObFMf_k`
                    )
                        .then((result) => result.json())
                        .then((res) => {//arricchisco l'oggetto città con l'immagine
                            if (res.results.length > 0)//se esiste almeno un risultato, lo uso
                                data.image = res.results[0].urls.regular;
                            else {//altrimenti immagine default
                                data.image = 'http://architizer-prod.imgix.net/mediadata/projects/072013/b77aa4f3.jpg?q=60&auto=format,compress&w=1680&cs=strip';
                            }
                        })
                        .then(() => {
                            dispatch(getCityWeatherAction(data)); //conservo la città nello store, non persistente, la history
                            dispatch(setActualCityAction(data)); //setto la citta attuale
                        })
                        .catch((error) => console.log(error));
                    setTimeout(() => {
                        dispatch({
                            type: LOADING,
                        });
                    }, 1000);
                }
                )
                .catch(error => {
                    console.log(error);
                    dispatch({
                        type: LOADING,
                    }); dispatch({
                        type: LOADING_ERROR,
                    });
                });
        }
    };
};

export const addToFavouritesAction = (data) => {
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.cities.map((cityElement) => cityElement.city.id));//lista delle città nei preferiti
        if (!citiesIds.includes(data.city.id)) {//la città non è ancora nei preferiti?            
            dispatch({
                type: ADD_TO_FAVOURITES,//aggiungi città ai preferiti
                payload: data
            });
        } else {
            dispatch({
                type: ADD_ERROR//è già nei preferiti? stampa un errore
            });
        }
    };
};

export const removeFromFavouritesAction = (cityId) => {//funzione mai implementata
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.cities.map((cityElement) => cityElement.city.id));//lista delle città nei preferiti
        if (citiesIds.includes(cityId)) {//la città è già nei preferiti?
            dispatch({
                type: REMOVE_FROM_FAVOURITES,//rimuovila dai preferiti
                payload: cityId
            });
        }
    };
};

export const acceptedCookiesAction = () => ({
    type: ACCEPTED_COOKIES
});