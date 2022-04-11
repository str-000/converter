import React from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import InputForm from './InputForm'
export default class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = { selectedCard: 1 }
    }

    toggleMe = (value) => {
        this.setState({ selectedCard: value })
    }

    render() {
        return (
            <div>
                <div className='card-buttons'>
                    <button defaultChecked onClick={() => this.toggleMe(1)} className={this.state.selectedCard === 1 ? 'card-button-active' : 'card-button'}>
                        <span>długość</span>
                    </button>
                    <button onClick={() => this.toggleMe(2)} className={this.state.selectedCard === 2 ? 'card-button-active' : 'card-button'}>
                        <span>waga</span>
                    </button>
                    <button onClick={() => this.toggleMe(3)} className={this.state.selectedCard === 3 ? 'card-button-active' : 'card-button'}>
                        <span>prędkość</span>
                    </button>
                    <button onClick={() => this.toggleMe(4)} className={this.state.selectedCard === 4 ? 'card-button-active' : 'card-button'}>
                        <span>powierzchnia</span>
                    </button>
                </div>

                <div className='input-container'>
                    <InputForm selectedCard={this.state.selectedCard} />
                </div>
            </div>
        )
    }
}
