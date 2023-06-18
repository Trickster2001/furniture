import React, { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom';


export default function Login(props) {

  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();

  let location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      props.showAlert("Logged in Successfully", "success")
      navigate("/");
    }
    else {
      props.showAlert("Invalid detalis", "danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div style={{width: "60vw", margin:'auto'}}>
        <h2>Login to continue to TrickNotes</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    </>
  )
}
