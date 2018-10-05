import React from 'react'

const RegisterBox = ({ errorMessage, signup, handleChangePassReg, handleChangeEmReg}) => {
  return(
    <div className="inner-container">
      <div className="header">
        Register
        </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" className="login-input" placeholder="Email" 
            onChange={handleChangeEmReg}/>
          
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="login-input" placeholder="Password" 
             onChange={handleChangePassReg}/>
          
        </div>
        <button type="button" className="login-btn"
          onClick={signup}>Register</button>
        <span>{errorMessage}</span>
      </div>
    </div>
  )
}
export default RegisterBox