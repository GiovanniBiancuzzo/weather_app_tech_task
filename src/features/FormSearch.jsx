import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
        <Col md={6} lg={4}>
            <h3>Search</h3>
            <Form
                onSubmit={handleSubmit}
                role="search"
                style={{ position: "relative" }}
            >
                <Form.Control
                    className="miniContainer"
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
        </Col>
    );
};

export default FormSearch;
