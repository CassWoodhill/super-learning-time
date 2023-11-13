import React from 'react';
import CText from '../atoms/Text';
import CHeading from '../atoms/Heading';

const EngineeringChecklist: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Engineering techniques in more detail</CHeading>
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

export default EngineeringChecklist;
