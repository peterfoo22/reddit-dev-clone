// pages/signin.tsx

"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button } from '@nextui-org/react';


interface SignInProps {}

export default function SignIn(props: SignInProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res && res.error) {
      setError(res.error);
    } else {
      redirect('/');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign In</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
