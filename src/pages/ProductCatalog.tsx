import Card from "react-bootstrap/Card";
import jsonData from '../produkty.json'
import {ReactElement} from "react";
import {LinkContainer} from "react-router-bootstrap";

const products = jsonData.products

const itemList: ReactElement[] = []

for (const key in products) {
    itemList.push(
        <Card style={{float: 'left'}}>
            <Card.Body style={{width: '20rem', height: '20rem'}}>
                <Card.Title>{products[key].name}</Card.Title>
                <Card.Subtitle>{products[key].price} zł</Card.Subtitle>
                <Card.Text>
                    {products[key].description}
                </Card.Text>
                <LinkContainer to={"/ProductPage/"+products[key].id}>
                    <Card.Link>Buy</Card.Link>
                </LinkContainer>
            </Card.Body>
        </Card>
    )
}


    const ProductCatalog = () => {
    return (
        <>
            <Card style={{float: 'left'}}>
                <Card.Body>
                    {itemList}
                </Card.Body>
            </Card>
        </>
    )
};

export default ProductCatalog;