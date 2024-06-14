// SiteFooter.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SiteFooter() {
    return (
        <Container>
            <Card className="text-Footer">
                <Card.Header>Ad Section</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        @Sahil Sharma
                    </Card.Text>
                    <Button variant="primary">Click on ad</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    );
}

export default SiteFooter;
