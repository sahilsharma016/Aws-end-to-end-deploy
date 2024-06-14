// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// // import { Amplify } from 'aws-amplify';

// import {API} from 'aws-amplify';

// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// // import {Storage} from 'aws-amplify';
// import { graphqlOperation } from '@aws-amplify/api-graphql';
// import { createContact } from '../../graphql/mutations';
// import {v4 as uuid} from 'uuid';

// function Contacts() {
//     const [contactData, setContactData] = useState({ name: "", email: "" });
//      const [profilePic,setProfilePic] = useState("");
//     const addNewContact =async() => {
//         const{name,email,}=contactData;

//         // send image to s3
//         Storage.configure({region:'us-east-1'});
//         const {key} = await Storage.put('${uuid()}.png',profilePic,{contentType: 'image/png'});



//         const newContact ={
//             id:uuid(),
//             name,
//             email,
//             profilepicpath:key
//         }; 
//         // amplify Graph-Q API
//         await API.graphql(graphqlOperation(createContact,{input: newContact}));
//     }


//     return (
//         <Container>
//             <Row className="px-4 my-5">
//                 <Col><h1>Add New Contact</h1></Col>
//             </Row>

//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder="Enter your name"
//                         value={contactData.name}
//                         onChange={evt => setContactData({ ...contactData, name: evt.target.value })}
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                         type="email"
//                         placeholder="Enter email"
//                         value={contactData.email}
//                         onChange={evt => setContactData({ ...contactData, email: evt.target.value })}
//                     />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicText">
//                     <Form.Label>Profile Pic</Form.Label>
//                     <Form.Control
//                         type="file"
//                         placeholder="Upload image"
//                         accept="image/png"
//                         onChange={evt => setProfilePic(evt.target.files[0])} 
//                     />
//                 </Form.Group>

//                 <Button variant="primary" type="submit" onClick={addNewContact}>
//                     Add
//                 </Button>
//             </Form>
//             <br />

//             <Row className="px-2 my-2">
//                 <Col>
//                     <Card style={{ width: '12rem' }}>
//                         <Card.Img variant="top" src="Panda.jpg" />
//                         <Card.Body>
//                             <Card.Title>Adorable Panda</Card.Title>
//                             <Card.Text>
//                                 Meet this fluffy panda and explore its playful antics.
//                             </Card.Text>
//                             <Button variant="primary">Go somewhere</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Contacts;


import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { API, Storage } from 'aws-amplify';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { createContact } from '../../graphql/mutations';
import { v4 as uuid } from 'uuid';

function Contacts() {
    const [contactData, setContactData] = useState({ name: "", email: "" });
    const [profilePic, setProfilePic] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const addNewContact = async () => {
        const { name, email } = contactData;
    
        try {
            setLoading(true);
    
            if (!profilePic) {
                throw new Error('Please select a profile picture.');
            }
    
            Storage.configure({ region: 'us-east-1' });
            const { key } = await Storage.put(`${uuid()}.png`, profilePic, { contentType: 'image/png' });
    
            const newContact = {
                id: uuid(),
                name,
                email,
                profilepicpath: key
            };
    
            await API.graphql(graphqlOperation(createContact, { input: newContact }));
    
            setContactData({ name: '', email: '' });
            setProfilePic('');
            setError(null);
        } catch (err) {
            console.error('Error adding contact:', err);
            setError('Network error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Add New Contact</h1></Col>
            </Row>

            {error && (
                <Row className="px-4 my-2">
                    <Col>
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    </Col>
                </Row>
            )}

            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={contactData.name}
                        onChange={evt => setContactData({ ...contactData, name: evt.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={contactData.email}
                        onChange={evt => setContactData({ ...contactData, email: evt.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Profile Pic</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="Upload image"
                        accept="image/png"
                        onChange={evt => setProfilePic(evt.target.files[0])}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={addNewContact} disabled={loading}>
                    {loading ? 'Adding...' : 'Add'}
                </Button>
            </Form>
            <br />

            <Row className="px-2 my-2">
                <Col>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="Panda.jpg" />
                        <Card.Body>
                            <Card.Title>Adorable Panda</Card.Title>
                            <Card.Text>
                                Meet this fluffy panda and explore its playful antics.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;
