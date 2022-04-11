import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import List from './List';

import { lenght, weight, speed, surface } from './units'

export default class InputForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {inputValue: '', convertFrom: 1, convertTo: 1}

        this.handleChange = this.handleChange.bind(this);
    }

    setCardToUse(selectedCard) {
        switch (selectedCard) {
            case 1:
                return lenght;
            case 2:
                return weight;
            case 3:
                return speed;
            case 4:
                return surface;
            default:
                return lenght;
        }
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value})
        console.log(this.state.inputValue)
    }

    toggleConvertFrom=(value)=>{
        this.setState({convertFrom: value}) 
    }

    toggleConvertTo=(value)=>{
        this.setState({convertTo: value}) 
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control onChange={this.handleChange} value={this.state.inputValue}/>
                        <Form.Label>Jednostka</Form.Label>
                        <List selectedCard={this.props.selectedCard} setCardToUse={this.setCardToUse} toggleConvert={this.toggleConvertFrom}/>
                    </Col>
                    =
                    <Col>
                        <Form.Control onChange={this.handleChange} value={this.state.inputValue}/>
                        <Form.Label>Jednostka</Form.Label>
                        <List selectedCard={this.props.selectedCard} setCardToUse={this.setCardToUse} toggleConvert={this.toggleConvertTo}/>
                    </Col>
                </Row>
            </Form>
        )
    }
}
