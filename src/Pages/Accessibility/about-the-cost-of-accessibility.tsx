import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutAccessibilityCost: React.FC = () => {
  return (
    <>
      <CHeading level={2}>The cost of lack of accessibility</CHeading>
      <hr />
      <ul>
        <li>
          <CLink href="https://karlgroves.com/understanding-the-cost-of-not-being-accessible/" openInNewTab>
            Understanding the cost of not being accessible, Karl Groves
          </CLink>
        </li>
        <li>
          <CLink href="https://karlgroves.com/how-long-until-your-website-is-accessible/" openInNewTab>
            How long until your website is accessible?, Karl Groves
          </CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutAccessibilityCost;
