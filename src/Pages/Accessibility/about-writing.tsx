import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CLink from '../../components/atoms/Link';

const AboutWriting: React.FC = () => {
  return (
    <>
      <CHeading level={2}>Writing for user interfaces</CHeading>
      <hr />
      <ul>
        <li>
          <CLink href="https://www.gov.uk/service-manual/design/writing-for-user-interfaces" openInNewTab>Writing for user interfaces, GOV UK</CLink>
        </li>
        <li>
          <CLink href="https://mikebifulco.com/posts/dont-center-paragraph-text" openInNewTab>Don't centre align paragraph text, Mike Bifulco</CLink>
        </li>
        <li>
          <CLink href="https://www.linkedin.com/feed/update/urn:li:activity:7123261996451467264?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7123261996451467264%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=Lk%2BbaGxsT9Se7M86%2Fuk%2F%2Fw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BrsSkrV3cTeWU97pepKe%2FgQ%3D%3D" openInNewTab>
            Accessible captions in social media, Meryl Evans (Linked in)
          </CLink>
        </li>
        <li>
          <CLink href="https://business.scope.org.uk/article/how-to-write-better-link-text-for-accessibility">
            How to write hyperlink text for better web accessibility, Scope UK
          </CLink>
        </li>
      </ul>
    </>
  );
}

export default AboutWriting;
