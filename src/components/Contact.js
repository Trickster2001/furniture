import React from 'react'

const Contact = () => {
  return (
    <>
       <div>
            <div>
            <h2 className="text-center shadow p-3 mb-5 bg-body-secondary rounded">Contact us</h2>
            </div> 
        <form className="entire mx-5 my-3 p-5">
            <div>
              <label for="email">Email address *</label>
              <input type="email" className="form-control" placeholder="example@eg.com" required /> 
            </div>
            <div className="mt-3">
              <label for="query">Select your query *</label>
              <select className="form-control">
                <option>Choose the query</option>
                <option>Fault in the furniture purchased</option>
                <option>Request for return</option>
                <option>Delay in delivery of furniture</option>
                <option>Request for cancel</option>
                <option>Other</option>
              </select>
            </div>
           
            <div className="form-group">
              <label for="textarea">Message</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <button className="btn btn-primary">SUBMIT</button>
            <footer className="container">
              <p className="float-right"><a href="#">Back to top</a></p>
              <p>©️ 2022-2023 Ikeafurnitures, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
          </form>
         
      </div>
    </>
  )
}

export default Contact
