import Card from "react-bootstrap/Card";
import * as product from '../produkty.json'
import {ReactElement} from "react";
import {LinkContainer} from "react-router-bootstrap";

const itemList: ReactElement[] = []

for (const key in product) {
    itemList.push(
        <Card style={{float: 'left'}}>
            <Card.Body style={{width: '20rem', height: '20rem'}}>
                <Card.Title>{product[key].name}</Card.Title>
                <Card.Subtitle>{product[key].price} zł</Card.Subtitle>
                <Card.Text>
                    {product[key].description}
                </Card.Text>
                <LinkContainer to="/ProductPage">
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