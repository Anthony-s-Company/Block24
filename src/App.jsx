import { useState, useEffect } from 'react'
import GridExample from '../components/Card'
import './App.css'
import {
  MDBRow
} from 'mdb-react-ui-kit';

// API Endpoint
const cohortName = "2302-ACC-PT-WEB-PT-A";

// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const PLAYERS_APIURL = `${APIURL}/players`;

function App() {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(PLAYERS_APIURL)
      const json = await res.json()
      setPuppies(json.data['players'])
    }
    fetchData()
  }, [])

  return (
    <>
    <h1>Puppy Pals</h1>
    <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      {puppies.map((puppy) => <GridExample key={puppy.id} puppy={puppy} />)}
    </MDBRow>
    </>
  );
}

export default App
