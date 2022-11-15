import React from 'react';
import styled, { keyframes } from 'styled-components';

type PropsType = {
  color: string;
  text: string;
};

const Loading = ({ color, text }: PropsType) => {
  return (
    <LoadingContainer>
      <Spinner color={color} />
      <Text>{text}</Text>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const spin = keyframes`
  from { transform: rotate(45deg); }
  to { transform: rotate(405deg); }
`;

const Spinner = styled.div<{ color: string }>`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-left: 6px solid ${(props) => props.color};
  border-radius: 50%;
  animation: ${spin} 2s ease infinite;
`;
