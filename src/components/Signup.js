import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:"" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch("http://127.0.0.1:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json()
    console.log(json);
    
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate("/");
      props.showAlert("Account Created Successfully", "success")
    }
    else{
      props.showAlert("Invalid Credentials", "danger")
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div className='container' style={{width: "60vw", margin:'auto'}}>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' id="name" onChange={onChange} aria-describedby="emailHelp"/>    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp"/>
    <sub>We'll never share your email with anyone else.</sub>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password" onChange={onChange} minLength={5} required/>
    <sub>Password must be atleast </sub>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword' id="cpassword" onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
