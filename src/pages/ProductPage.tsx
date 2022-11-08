import {Card} from "react-bootstrap";
import jsonData from '../produkty.json'
import {useParams} from "react-router-dom";

interface Product {
    id: string,
    name: string,
    category: string,
    price: string,
    description: string,
    photos: string[],
}

const products = jsonData.products as Product[]


const ProductPage = () => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    const parsedId = String(id)
    const product = products.find(product => product.id === parsedId)

    if (product === undefined) {
        return (
            <>
                <Card style={{float: 'left'}}>
                    <Card.Body>
                        <Card.Title>Product not found</Card.Title>
                    </Card.Body>
                </Card>
            </>
        )
    }

    return (
        <>
            <Card style={{height: "1000px"}}>
                <Card.Body>
                    <Card>
                        <Card.Body>
                            <Card>
                                <Card.Body>
                                    {product.name}
                                </Card.Body>
                            </Card>
                            <p>{product.price}</p>
                            <p>{product.description}</p>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>


        </>
    );
};

export default ProductPage;