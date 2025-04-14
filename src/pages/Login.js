import React from 'react';

const SignupPage = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Create Your Account</h2>
      <form>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
