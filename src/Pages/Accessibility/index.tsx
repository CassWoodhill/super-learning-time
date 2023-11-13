import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CMain from '../../components/atoms/Main';
import AccessibilityChecklist from '../../components/Checklists/accessibility';
import AboutPlaceholderAttribute from './about-placeholder-attribute';
import AboutAccommodatingCognitiveNeeds from './about-accommodating-cognitive-needs';
import AboutWriting from './about-writing';
import AboutWcag from './about-wcag';
import AboutAccessibilityCost from './about-the-cost-of-accessibility';
import AboutSummaryGuides from './about-summary-guides';

const AccessibilityHome: React.FC = () => {
  return (
    <CMain>
      <CHeading level={1}>Useful accessibility reading</CHeading>
      <CText>A list of different useful guides and good reads to get you up to speed on best practices, when it comes to inclusive content and online accessibility</CText>
      <AboutWcag />
      <AboutAccessibilityCost />
      <AboutSummaryGuides />
      <AboutWriting />
      <AboutAccommodatingCognitiveNeeds />
      <AboutPlaceholderAttribute />
    </CMain>
  );
}

export default AccessibilityHome;
