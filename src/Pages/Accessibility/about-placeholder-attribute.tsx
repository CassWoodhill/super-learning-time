import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutPlaceholderAttribute: React.FC = () => {
  return (
    <>
      <CHeading level={2}>A hint about placeholders</CHeading>
      <hr />
      <CText>
        Placeholder attribute should be used to represent example text in an input, not as a replacement for hint text or form label. However, if used as example text, some users may skip the input thinking the input has been pre-filled in.
      </CText>
      <ul>
        <li>
          <CLink href="https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research" openInNewTab>W3 (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://html.spec.whatwg.org/multipage/input.html#the-placeholder-attribute" openInNewTab>HTML working group (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://www.uxmatters.com/mt/archives/2010/03/dont-put-hints-inside-text-boxes-in-web-forms.php" openInNewTab>UX matters (opens in new tab)</CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutPlaceholderAttribute;
