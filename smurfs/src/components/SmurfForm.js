import React, {useContext} from 'react'
import {SmurfContext} from '../SmurfContext'
import axios from 'axios'

const SmurfForm = (props) => {

  const {newSmurf, setNewSmurf} = useContext(SmurfContext)
  // console.log('newSmurf', newSmurf);

  const handleChange = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
  }

  const ageChange = e => {
    setNewSmurf({...newSmurf, age: parseInt(e.target.value, 10)})
  }

  const submitSmurf = () => {
    console.log('newSmurf submit', newSmurf);
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      // console.log(res);
    })
    .catch(err => {
      console.log(err.response.data);
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit', newSmurf);
    submitSmurf();
    setNewSmurf({name:'', age:'', height:''})
  }

return(
  <div>
    <h1>Add a new Smurf!</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="What is their name?" value={newSmurf.name} onChange={handleChange} />

      <input type="text" name="age" placeholder="How old are they?" value={newSmurf.age} onChange={ageChange} />

      <input type="text" name="height" placeholder="How tall are they?" value={newSmurf.height} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Add Smurf!</button>
    </form>
  </div>
  )
}
export default SmurfForm
