import React from 'react';
import CText from '../../components/atoms/Text';
import CHeading from '../../components/atoms/Heading';
import CMain from '../../components/atoms/Main';
import CLink from '../../components/atoms/Link';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <CMain>
      <CHeading level={1}>Welcome to Cass Woodhill's thoughts</CHeading>
      <CText>
        I am a front-end specialised software engineer, and accessibility chamption at <CLink href="http://www.kooth.com" target="_blank">Kooth (opens in new window)</CLink>.
      </CText>
      <CText>
        This space will be for posting anything I've learnt, want to learn or document. The pages will be sparse to begin with as I collate all my bookmarks and post them in a readable format.
      </CText>
      <CText>
        In the meantine, enjoy the content I've listed. These are resources that I have found personally useful to help me understand the world of front-end and accessibliity more deeply.
      </CText>
      <nav>
        <ul>
          <li>
            <CLink to="/accessibility" renderReactRouterLinkInstead={Link}>Accessibility guides and good reads</CLink>
          </li>
          <li>
            <CLink to="/write-up-checklist" renderReactRouterLinkInstead={Link}>Todo checklist of what to learn in more detail</CLink>
          </li>
        </ul>
      </nav>
    </CMain>
  );
}

export default Home;
