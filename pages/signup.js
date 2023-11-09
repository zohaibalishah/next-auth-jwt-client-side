import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
        alert("Signup success")
        router.push('/login'); // Redirect to login page using next/router
    } else {
      setError(data.error);
    }
  };

  return (
   <div className='col-md-6 mx-auto'>
     <form onSubmit={handleSubmit}>
        <h1>Signup form</h1>
      <div className="form-group">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
          className="form-control mt-3"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
          className="form-control mt-3"
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
      {error && <p>{error}</p>}
      <button type="submit" className="btn btn-primary mt-2">
        Sign Up
      </button>
    </form>
    <p>Already have an account? <Link href="/login">Login</Link></p>
   </div>
  );
}
