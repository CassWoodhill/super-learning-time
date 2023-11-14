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
          <CLink href="https://www.w3.org/WAI/cognitive/" openInNewTab>Cognitive accessibility, W3</CLink>
        </li>
        <li>
          <CLink href="https://www.w3.org/TR/coga-usable/#user_needs" openInNewTab>Conginitve user needs, W3</CLink>
        </li>
        <li>
          <CLink href="https://www.deque.com/blog/an-introductory-guide-to-understanding-cognitive-disabilities/" openInNewTab>Guide to understanding cognitive disabilities, Deque</CLink>
        </li>
        <li>
          <CLink href="https://www.dyslexiauk.co.uk/the-font-of-all-knowledge/" openInNewTab>Font of all knowledge, Dyslexia UK</CLink>
        </li>
        <li>
          <CLink href="https://neurodiversity.design/" openInNewTab>Neurodiversity design system</CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutAccommodatingCognitiveNeeds;
