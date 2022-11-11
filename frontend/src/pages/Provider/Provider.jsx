import { React, useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import "./Provider.css"

function Provider() {
    const [user, token] = useAuth()
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [zipcode, setzipcode] = useState('')
    
useEffect(() => {

})

async function handleSubmit(event){
    event.preventDefault();
    let addNew = {
        street: street,
        city: city,
        state: state,
        zipcode: zipcode,
    }
    await axios.post(`http://127.0.0.1:8000/api/addresses/`,addNew, {
        headers: { Authorization: "Bearer " + token,},
      })
    prompt("address has been added to your profile")
};


  return (
    <div>
        <div className='entry-box'>
            <form onSubmit={handleSubmit} className='form-grid'>
                <label className='input'>
                    <h3>  street:</h3><input type="text" value={street} onChange={(event) => setstreet(event.target.value)}/>
                </label>
                <label className='input'>
                        <h3>  city:</h3><input type="text" value={city} onChange={(event) => setcity(event.target.value)}/>
                </label>
                <label className='input'>
                        <h3>  state:</h3><input type="text" value={state} onChange={(event) => setstate(event.target.value)}/>
                </label>
                <label className='input'>
                        <h3>  zipcode:</h3><input type="text" value={zipcode} onChange={(event) => setzipcode(event.target.value)}/>
                </label><br/>
                <input type="submit" value={'Add'} className='button' />
            </form>
        </div>
    </div>
  )
}

export default Provider

