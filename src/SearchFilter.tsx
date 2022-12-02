import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jsonData from './produkty.json'
import {Product} from "./Product";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {Alert, Col, Container, Dropdown, Row} from "react-bootstrap";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";

const products = jsonData.products as Product[]

const categories = products.map(product => product.category)
const uniqueCategories = [...new Set(categories)].sort((a, b) => a.localeCompare(b, 'pl', {sensitivity: 'accent'}));

function SearchFilter() {
    const [selectedCategory, setSelectedCategory] = useState('Select...');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMinPrice, setEnteredMinPrice] = useState(0);
    const [enteredMaxPrice, setEnteredMaxPrice] = useState(0);
    const [currentAlert, setCurrentAlert] = useState('')
    const navigate = useNavigate()

    return (
        <Card style={{width: '100%'}}>
            <Card.Body>
                <>
                    {currentAlert === '' ? <>

                    </> : <>
                        <Alert variant='danger'>
                            {currentAlert}
                        </Alert>
                    </>}
                </>
                <Form className="d-flex" onSubmit={
                    (ev) => {
                        if (enteredMaxPrice >= enteredMinPrice) {
                            setCurrentAlert('')
                            navigate({
                                pathname: '/search',
                                search: `?name=${enteredName}&minPrice=${enteredMinPrice}&maxPrice=${enteredMaxPrice}&category=${selectedCategory}`
                            });
                        } else {
                            setCurrentAlert('Max price must be greater than min price')
                        }
                        ev.preventDefault()
                        return false
                    }
                }>
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <Dropdown>
                                    <label>Category</label><br/>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        {selectedCategory}
                                    </Dropdown.Toggle>
                                    <DropdownMenu>
                                        {uniqueCategories.map((category, _) => (
                                            <DropdownItem key={category} onClick={() => {
                                                setSelectedCategory(category)
                                            }}>
                                                {category}
                                            </DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="formBasicProductName">
                                    <Form.Label>Product name</Form.Label>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        onChange={event => {
                                            if (event.target instanceof HTMLInputElement) {
                                                setEnteredName(event.target.value)
                                                console.log(event.target.value)
                                            }
                                        }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicMinPrice">
                                    <Form.Label>Min. Price</Form.Label>
                                    <Form.Control type="number" min="0" placeholder="minPrice" onChange={event => {
                                        if (event.target instanceof HTMLInputElement) {
                                            setEnteredMinPrice(event.target.valueAsNumber)
                                            console.log(event.target.value)
                                        }
                                    }}/>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group className="mb-3" controlId="formBasicMaxPrice">
                                    <Form.Label>Max. Price</Form.Label>
                                    <Form.Control type="number" min="0" placeholder="maxPrice" onChange={event => {
                                        if (event.target instanceof HTMLInputElement) {
                                            setEnteredMaxPrice(event.target.valueAsNumber)
                                            console.log(event.target.value)
                                        }
                                    }}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="primary" type="submit">Search</Button>
                </Form>


            </Card.Body>
        </Card>
    );
}

export default SearchFilter;