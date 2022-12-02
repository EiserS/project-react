import {Card} from "react-bootstrap";
import SearchFilter from "../SearchFilter";

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
                <SearchFilter/>
            </Card.Body>
        </Card>

        </>

    );
};

export default Home;