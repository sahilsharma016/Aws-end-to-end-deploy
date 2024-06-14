import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HomePage() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image
                        src="echo.png"
                        fluid
                    />
                </Col>
                <Col sm={6}>
                <h1 className='font-weight-light'> Test App </h1>
                <p className='mt-4'>
                    lorem ipsum
                    <br></br>
                </p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
