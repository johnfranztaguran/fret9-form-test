import React from 'react';

const Home = ({ logout, deleteUser }) => {
  return (
    <div>
      <div>
        <button type="button" className="login-btn" onClick={logout}>Logout</button>
        <button type="button" className="login-btn" onClick={deleteUser}>Delete Account</button>
      </div>
      <h1>Hello This is your Home</h1>

    </div>
  );
}


export default Home;