'use client'
import { Button } from '@nextui-org/react';

import { signOut } from 'next-auth/react';

export default function Dashboard() {
  return (
    <div>
      <Button type="submit" color='secondary' variant='bordered' onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}