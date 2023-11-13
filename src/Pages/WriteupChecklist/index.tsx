import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CMain from '../../components/atoms/Main';
import AccessibilityChecklist from '../../components/Checklists/accessibility';
import FrontendChecklist from '../../components/Checklists/frontend';
import EngineeringChecklist from '../../components/Checklists/engineering-techniques';

const WriteupChecklist: React.FC = () => {
  return (
    <CMain>
      <CHeading level={1}>Cass's checklist to come back to and update</CHeading>
      <CText>
        I have a list of areas I am looking to understanding more for my own learnings, and this will be a space to share notes to myself.
      </CText>
      <AccessibilityChecklist />
      <FrontendChecklist />
      <EngineeringChecklist />
    </CMain>
  );
}

export default WriteupChecklist;
