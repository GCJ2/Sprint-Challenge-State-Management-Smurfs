import React from 'react'

const SmurfCard = (props) => {
return(
  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Height: {props.height}</p>
    <p>ID: {props.id}</p>
  </div>
  )
}
export default SmurfCard
