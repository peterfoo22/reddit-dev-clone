'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';

interface FormButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function FormButton({ children, onClick, type = 'button' }: FormButtonProps) {
  
  const { pending } = useFormStatus();

  return (
    <Button type={type} isLoading={pending} onClick={onClick}>
      {children}
    </Button>
  );
}
