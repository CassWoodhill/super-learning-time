import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutSummaryGuides: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Useful visual guides and checklists</CHeading>
      <hr />
      <ul>
        <li>
          <CLink href="https://www.accessguide.io/" openInNewTab>Access guide (opens in new tab)</CLink>
        </li>
        <li>
          <CLink href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/" openInNewTab>
            GOV UK - Dos and Don'ts on designing for accessibility (opens in new tab)
          </CLink>
        </li>
        <li>
          <CLink href="https://dequeuniversity.com/checklists/web/" openInNewTab>
            Deque - Web accessibility checklist (opens in new tab)
          </CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutSummaryGuides;
