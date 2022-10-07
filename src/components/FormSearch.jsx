import { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
        <>
            <h4 className="titles">Search</h4>
            <Form
                onSubmit={handleSubmit}
                role="search"
                style={{ position: "relative" }}
            >
                <Form.Control
                    className="miniContainer shadowCorners"
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
                ></Form.Control>
                <Button className="mainGradient searchBtn" type="submit">
                    <BsSearch />
                </Button>
            </Form>
        </>
    );
};

export default FormSearch;
