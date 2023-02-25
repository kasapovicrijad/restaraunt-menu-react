import React from 'react'

const FoodsItem=(props) =>{
    const food = props.singleFood
  return (
    <li>
        <h1>{food.title}</h1>
    </li>
  )
}

export default FoodsItem
