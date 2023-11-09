import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const router=useRouter()

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/');
    } else {
      setError(data.error);
    }
  };


  return (
    <div className="col-md-6 mx-auto">
      <h1>Login form</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
            className="form-control mt-3 "
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
            className="form-control mt-3"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2 ">
          Login
        </button>
      </form>
      <p>Don't have an account? <Link href="/signup">Sign up</Link></p>
    </div>
  );
}
