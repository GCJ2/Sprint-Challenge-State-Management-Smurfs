import React, { useContext } from 'react';
import {SmurfContext} from '../SmurfContext'
import SmurfCard from './SmurfCard'

const SmurfList = (props) => {

  const {smurfs} = useContext(SmurfContext)
  // console.log(smurfs);

return(
  <div>
    {smurfs.map(smurf => (
      <SmurfCard key={smurf.id} name={smurf.name} age={smurf.age} height={smurf.height} id={smurf.id}/>
    ))}
  </div>
  )
}
export default SmurfList
