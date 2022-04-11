import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default class InputForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {inputValue: ''}
    }

    render() {
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
}
