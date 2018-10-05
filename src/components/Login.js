import React from 'react'

const LoginBox = ({ login, handleChangePassLog, handleChangeEmLog, errorMessage }) => {
  return(
    <div className="inner-container">
      <div className="header">
        Login
        </div>
      <div className="box">

        <div className="input-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="Email..." 
            onChange={handleChangeEmLog}/>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Password" 
            onChange={handleChangePassLog}/>
        </div>

        <button type="button" className="login-btn"
          onClick={login}>Login
          </button>
          <span>{errorMessage}</span>
      </div>
    </div>
  )
}

export default LoginBox