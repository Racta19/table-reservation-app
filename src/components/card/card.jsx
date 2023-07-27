import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="img" />
        <div className='row'>
            <h4 className='card-name'>{props.name}</h4>
            <h4 className='card-price'>{props.price}</h4>
        </div>
            <p className='description'>{props.description}</p>
        <p>Order a delivery</p>
    </div>
  )
}

export default Card