import {Card} from "react-bootstrap";

const Contact = () => {
    return (
        <>
            <Card style={{
                height: '1000px',
            }}>
                <Card.Body>
                    <Card>
                        <Card.Body >
                            <h1>Autor:</h1>
                            <h3>Damian Pawlik</h3>
                            <h3>Index 109484</h3>
                            <h3>Group 2</h3>
                            <h3>Łódź</h3>
                            <h3>Wykorzystywanie Wzorców w Nowych Technologiach</h3>
                            <p>Gdzie możesz mnie znaleźć :</p>
                            <ul>
                                <li>Email:
                                    <a href="mailto:109484@student.san.edu.pl">109484@student.san.edu.pl</a>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </>
    );
};

export default Contact;