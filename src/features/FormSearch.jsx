import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getWeatherInfosAction } from "../redux/actions";

const FormSearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfosAction(query));
        setQuery(""); //pulisco l'input field
    };

    return (
        <div>
            <h3>Search</h3>
            <form onSubmit={handleSubmit} role="search">
                <input
                    type="search"
                    required
                    autoFocus
                    autoComplete="on"
                    aria-label="search city"
                    pattern="^[A-zÀ-ú\s]*$"
                    value={query}
                    placeholder="ex: Miami"
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                ></input>
                <button type="submit">
                    <BsSearch />
                </button>
            </form>
        </div>
    );
};

export default FormSearch;
