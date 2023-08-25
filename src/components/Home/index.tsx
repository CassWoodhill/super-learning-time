import React from 'react';
import styled from 'styled-components';
import CText from '../atoms/Text';

const StyledHome = styled.main`
  padding: 1.25rem;

  @media all and (min-width: 48em){
    padding: 2.5rem;
  }
`

const Home: React.FC = () => {
  return (
    <StyledHome className="App">
      <h1>Welcome to Cass's thoughts-ground</h1>
      <CText>This will be updated soon!</CText>
      <CText>
        I have a list of areas I am looking to understanding more for my own learnings, and this will be a space to share notes to myself.
      </CText>
      <CText>
        Here's the list of what I'm looking to expand on, for myself (will be changing):
      </CText>
      <ul>
        <li>
          <CText inline>
            [] Functional programming
          </CText>
        </li>
        <li>
          <CText inline>
            [] HTMLX
          </CText>
        </li>
        <li>
          <CText inline>
            [] How to measure web performance
          </CText>
        </li>
        <li>
          <CText inline>
            [] What is a sub pixel
          </CText>
        </li>
        <li>
          <CText inline>
            [] Winston library logging
          </CText>
        </li>
        <li>
          <CText inline>
            [] The definitions of MUST/SHOULD/COULD
          </CText>
        </li>
        <li>
          <CText inline>
            [] Spaghetti code
          </CText>
        </li>
        <li>
          <CText inline>
            [] Higher order components
          </CText>
        </li>
      </ul>
    </StyledHome>
  );
}

export default Home;
