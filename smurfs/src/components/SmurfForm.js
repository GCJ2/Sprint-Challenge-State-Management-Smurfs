import React, {useContext} from 'react'
import {SmurfContext} from '../SmurfContext'
import axios from 'axios'

const SmurfForm = (props) => {

  const {newSmurf, setNewSmurf, smurfs, setSmurfs} = useContext(SmurfContext)
  console.log('newSmurf', newSmurf);

  const handleChange = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
  }

  const ageChange = e => {
    setNewSmurf({...newSmurf, age: parseInt(e.target.value, 10)})
  }

return(
  <div>
    <h1>Add a new Smurf!</h1>
    <form>
      <input type="text" name="name" placeholder="What is their name?" value={newSmurf.name} onChange={handleChange} />

      <input type="text" name="age" placeholder="How old are they?" value={newSmurf.age} onChange={ageChange} />

      <input type="text" name="height" placeholder="How tall are they?" value={newSmurf.height} onChange={handleChange} />
      <button type="button">Add Smurf!</button>
    </form>
  </div>
  )
}
export default SmurfForm
