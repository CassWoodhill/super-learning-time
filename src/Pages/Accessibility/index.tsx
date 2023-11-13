import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CMain from '../../components/atoms/Main';
import AccessibilityChecklist from '../../components/Checklists/accessibility';

const AccessibilityHome: React.FC = () => {
  return (
    <CMain>
      <CHeading level={1}>Useful accessibility lists</CHeading>
      <CText>A list of different useful guides and good reads to get you up to speed on best practices, when it comes to inclusive content and online accessibility</CText>
      <AccessibilityChecklist />
    </CMain>
  );
}

export default AccessibilityHome;
