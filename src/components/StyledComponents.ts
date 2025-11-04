/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f6f8fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h1`
  color: #1a1a1a;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const Subtitle = styled.h2`
  color: #333;
  margin: 15px 0 8px 0;
  font-size: 1.3rem;
`;

export const ColorForm = styled.form`
  display: flex;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  width: 220px;
  font-size: 1rem;
  margin-right: 10px;

  &:focus {
    border-color: #888;
  }
`;

export const Button = styled.button`
  padding: 10px 14px;
  background-color: #4c8bf5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3a6edc;
  }
`;

export const ColorList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const ColorItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;
  width: 280px;
`;

export const ColorName = styled.span<{ color?: string; isApi?: boolean }>`
  font-weight: ${(props) => (props.isApi ? '400' : '700')};
  font-size: 1.1rem;
  color: ${(props) => props.color || '#000'};
  font-style: ${(props) => (props.isApi ? 'italic' : 'normal')};
  text-transform: capitalize;
`;
