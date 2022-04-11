import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class List extends Component {
    render() {
        return (
            <Form.Select multiple>
                {this.props.setCardToUse(this.props.selectedCard).map((unit, index) => (
                    <option key={index} onClick={()=>this.props.toggleConvert(index+1)}>{unit.title}</option>
                ))}
            </Form.Select>
        )
    }
}
