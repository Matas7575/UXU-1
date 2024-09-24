'use client';
import Link from 'next/link';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <Container>
      <Link href="/">Home</Link> | <Link href="/persona">Persona</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;
