import React, {useContext} from 'react'
import {SmurfContext} from '../SmurfContext'
import axios from 'axios'

const SmurfForm = (props) => {

  const {newSmurf, setNewSmurf, smurfs, setSmurfs} = useContext(SmurfContext)
  console.log('newSmurf', newSmurf);

return(
  <div>
    <h1>Add a new Smurf!</h1>
    <form>
      <input type="text" name="name" placeholder="What is their name?" value="" />

      <input type="text" name="age" placeholder="How old are they?" value="" />

      <input type="text" name="height" placeholder="How tall are they?" value="" />
      <button type="button">Add Smurf!</button>
    </form>
  </div>
  )
}
export default SmurfForm
