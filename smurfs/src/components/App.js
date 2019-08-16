import React, {useEffect, useState} from "react";
import SmurfList from './SmurfList'
import SmurfForm from './SmurfForm'
import axios from 'axios'
import {SmurfContext} from '../SmurfContext'

import "./App.css";
function App () {

  const [smurfs, setSmurfs] = useState([])
  const [newSmurf, setNewSmurf] = useState({
    name:'',
    age:'',
    height:'',
    id: ''
  })
  // console.log(smurfs);

  useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      setSmurfs(res.data)
    })
  },[newSmurf])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfContext.Provider value={{smurfs, setSmurfs, newSmurf, setNewSmurf}}>
          <SmurfForm />
          <SmurfList />
        </SmurfContext.Provider>
      </div>
    );

}

export default App;
