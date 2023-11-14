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
          <CLink href="https://jfhector.github.io/accessibility-guidelines/" openInNewTab>Simple web accessibility guidelines, JF Hector Labram</CLink>
        </li>
        <li>
          <CLink href="https://appt.org/en/guidelines/wcag" openInNewTab>WCAG guidelines for apps, Appt</CLink>
        </li>
        <li>
          <CLink href="https://www.digitala11y.com/wcag2-0/" openInNewTab>Understanding WCAG, Digital a11y</CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutWcag;
