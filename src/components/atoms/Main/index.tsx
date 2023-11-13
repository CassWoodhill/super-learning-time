import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface MainProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  padding: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 75rem;
  width: 100%;

  @media all and (min-width: 48em){
    padding: 2.5rem;
  }
`

const CMain: React.FC<MainProps> = ({
  children,
}) => {
  return (
    <StyledMain className="Main" id="main-content">
      {children}
    </StyledMain>
  );
}

export default CMain;
