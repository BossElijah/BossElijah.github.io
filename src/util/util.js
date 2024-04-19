import { ReactComponent as Bitbucket } from '../assets/bitbucket.svg';
import { ReactComponent as Codepen } from '../assets/codepen.svg';
import { ReactComponent as Github } from '../assets/github.svg';

export const getSocialMediaIcon = type => {
  switch (type) {
    case 'codepen':
      return <Codepen height="26" width="26" />;
    case 'bitbucket':
      return <Bitbucket height="26" width="26" />;
    case 'github':
      return <Github height="26" width="26" />;
    default:
      return null;
  }
};
