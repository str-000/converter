import React from 'react'
import InputForm from './InputForm'

export default class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {selectedCard: 1}
    }

    render() {
        return (
            <div>
                <div className='card-buttons'>
                    <button className={this.state.selectedCard === 1 ? 'card-button-active' : 'card-button'}>
                        <span>długość</span>
                    </button>
                    <button className={this.state.selectedCard === 2 ? 'card-button-active' : 'card-button'}>
                        <span>waga</span>
                    </button>
                    <button className={this.state.selectedCard === 3 ? 'card-button-active' : 'card-button'}>
                        <span>prędkość</span>
                    </button>
                    <button className={this.state.selectedCard === 4 ? 'card-button-active' : 'card-button'}>
                        <span>powierzchnia</span>
                    </button>
                </div>

                <div className='input-container'>
                    <InputForm />
                </div>
            </div>
        )
    }
}
