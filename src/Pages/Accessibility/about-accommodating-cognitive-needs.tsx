import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutAccommodatingCognitiveNeeds: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Accommodating cognitive needs</CHeading>
      <hr />
      <ul>
        <li>
          <CLink href="https://www.w3.org/WAI/cognitive/" openInNewTab>W3 - cognitive accessibility (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://www.w3.org/TR/coga-usable/#user_needs" openInNewTab>W3 - user needs (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://www.deque.com/blog/an-introductory-guide-to-understanding-cognitive-disabilities/" openInNewTab>Deque - Guide to understanding cognitive disabilities (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://www.dyslexiauk.co.uk/the-font-of-all-knowledge/" openInNewTab>Dyslexia UK - Font of all knowledge (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://neurodiversity.design/" openInNewTab>Neurodiversity design system (opens in new tab)</CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutAccommodatingCognitiveNeeds;
