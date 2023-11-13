import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutWcag: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Web content accessibility guidelines</CHeading>
      <hr />
      <CText>Enjoy these great online guides, breaking down WCAG (web content accessibility guidelines) for easier reading.</CText>

      <ul>
        <li>
          <CLink href="https://jfhector.github.io/accessibility-guidelines/" openInNewTab>JF Hector - Simple web accessibility guidelines (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://appt.org/en/guidelines/wcag" openInNewTab>Appt - WCAG guidelines for apps (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://www.digitala11y.com/wcag2-0/" openInNewTab>Digital a11y - Understanding WCAG (opens in new tab)</CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutWcag;
