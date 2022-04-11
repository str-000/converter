import React from 'react'
import InputForm from './InputForm'

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
                <InputForm/>
            </div>
        </div>
    )
}
