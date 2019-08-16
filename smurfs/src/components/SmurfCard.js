import React from 'react'
import axios from 'axios'

const SmurfCard = (props) => {

  const deleteSmurf = e => {
    alert(`${props.name} deleted. Please refresh for updates because I cannot figure out the useEffect dependency array issue in App.js.`);
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
  }

return(



  <div>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
    <p>Height: {props.height}</p>
    <p>ID: {props.id}</p>
    <button onClick={deleteSmurf}>Delete Smurf</button>
  </div>
  )
}
export default SmurfCard
