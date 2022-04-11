import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default function InputForm() {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Control />
                    <Form.Label>Jednostka</Form.Label>
                    <Form.Select multiple defaultValue="Choose...">
                        <option>metry [m]</option>
                        <option>kilometry [km]</option>
                    </Form.Select>
                </Col>
                =
                <Col>
                    <Form.Control />
                    <Form.Label>Jednostka</Form.Label>
                    <Form.Select multiple defaultValue="Choose...">
                        <option>metry [m]</option>
                        <option>kilometry [km]</option>
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    )
}
