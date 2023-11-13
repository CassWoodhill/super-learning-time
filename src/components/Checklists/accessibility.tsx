import React from 'react';
import CText from '../atoms/Text';
import CHeading from '../atoms/Heading';

const AccessibilityChecklist: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Accessibility to-do checklist</CHeading>
      <hr />
      <ul>
        <li>
          <CText inline>Writing inclusive content</CText>
        </li>
        <li>
          <CText inline>Designing inclusively</CText>
        </li>
        <li>
          <CText inline>All the talks I've enjoyed</CText>
        </li>
        <li>
          <CText inline>What do we mean by "accessibility"</CText>
        </li>
        <li>
          <CText inline>Principles of "accessibility"</CText>
        </li>
        <li>
          <CText inline>Resources for auditing</CText>
        </li>
      </ul>
    </>
  );
}

export default AccessibilityChecklist;
