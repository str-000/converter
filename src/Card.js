import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

export default function Card() {
    return (
        <div>
            <div className='card-buttons'>
                <button className='card-button'>
                    <span>długość</span>
                </button>
                <button className='card-button'>
                    <span>waga</span>
                </button>
                <button className='card-button'>
                    <span>prędkość</span>
                </button>
                <button className='card-button'>
                    <span>powierzchnia</span>
                </button>
            </div>

            <div className='input-container'>
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
            </div>
        </div>
    )
}
