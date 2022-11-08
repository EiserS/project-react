import {Card, Nav} from "react-bootstrap";

const Home = () => {
    return (
        <><Card style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '1000px',
        }}>
            <Card.Body>
                <Card style={{
                    width: '600px',
                }}>
                    <Card.Body>
                        <Card.Title>Home</Card.Title>
                        <Card.Subtitle>Home</Card.Subtitle>
                        <Card.Text>
                            Home
                        </Card.Text>
                        <Nav.Link>Home</Nav.Link>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>

        </>

    );
};

export default Home;