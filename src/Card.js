import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';

<<<<<<< Updated upstream
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
=======
export default class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {selectedCard: 1}
    }

    toggleMe=(value)=>{
        this.setState({selectedCard: value}) 
    }

    render() {
        return (
            <div>
                <div className='card-buttons'>
                    <button defaultChecked onClick={()=>this.toggleMe(1)} className={this.state.selectedCard === 1 ? 'card-button-active' : 'card-button'}>
                        <span>długość</span>
                    </button>
                    <button onClick={()=>this.toggleMe(2)} className={this.state.selectedCard === 2 ? 'card-button-active' : 'card-button'}>
                        <span>waga</span>
                    </button>
                    <button onClick={()=>this.toggleMe(3)} className={this.state.selectedCard === 3 ? 'card-button-active' : 'card-button'}>
                        <span>prędkość</span>
                    </button>
                    <button onClick={()=>this.toggleMe(4)} className={this.state.selectedCard === 4 ? 'card-button-active' : 'card-button'}>
                        <span>powierzchnia</span>
                    </button>
                </div>

                <div className='input-container'>
                    <InputForm selectedCard={this.state.selectedCard} />
                </div>
>>>>>>> Stashed changes
            </div>
        </div>
    )
}
