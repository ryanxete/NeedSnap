import React from 'react'
import emailjs from "emailjs-com"

function Email() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('gmail', '9bozdZUv7dy5cMnze', e.target, '9bozdZUv7dy5cMnze')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='entry-box'>
      <form onSubmit={sendEmail} className='form-grid' style={{ height:'500px', margin: "3rem 0rem 1rem 1rem", width: "96%"}}>
          <label className='input'>
              <h3>  Name:</h3><input type="text" />
          </label>
          <label className='input'>
                <h3>  Email:</h3><input type="text"/>
          </label>
          <label className='input'>
                  <h3>  Message:</h3><textarea type="text" rows="6" cols="20"/>
          </label><br/>
          <input type="submit" value={'Send'} className='button' />
      </form>
    </div> 
  );
  }

export default Email



{/* <div>
<form onSubmit={sendEmail}>
  Name:
  <input type="text" size="19" name="Contact-Name">
  Email:
  <input type="email" name="Contact-Email">
  Message:<br/> 
  <textarea name="Contact-Message" rows="6" cols="20">
  <textarea/>
  <button type="submit" value="Submit">Send</button>
<form/>
<div/> */}