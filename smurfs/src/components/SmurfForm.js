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
    setNewSmurf({name:'', age:'', height:'', id: ''})
  }

  const handleEdit = e => {
    e.preventDefault();
    console.log('newSmurf submit', newSmurf);
    const updatedSmurf = newSmurf
    axios.put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => {console.log(res.data)})
  }


return(
  <div>
    <h2>Add a new Smurf!</h2>
    <form className="smurf-form">
      <input type="text" name="name" placeholder="What is their name?" value={newSmurf.name} onChange={handleChange} />

      <input type="text" name="age" placeholder="How old are they?" value={newSmurf.age} onChange={ageChange} />

      <input type="text" name="height" placeholder="How tall are they?" value={newSmurf.height} onChange={handleChange} />

      <input type="number" name="id" placeholder="Enter the ID of smurf to edit" value={newSmurf.id} onChange={handleChange} />

      <button type="submit" onClick={handleSubmit}>Add Smurf!</button>

      <button type="submit" onClick={handleEdit}>Edit a Smurf!</button>
    </form>
  </div>
  )
}
export default SmurfForm
