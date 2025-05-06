import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Login from '../src/components/Login';

describe('Login healthcheck', () => {
  it('Login renders successfully', () => {
    render(<Login />);
    expect(screen.getByText(/Brut/)).toBeInTheDocument();
  });
});