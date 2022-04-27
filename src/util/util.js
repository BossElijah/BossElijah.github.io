import { ReactComponent as Codepen } from '../assets/codepen.svg';
import { ReactComponent as Bitbucket } from '../assets/bitbucket.svg';
import { ReactComponent as Github } from '../assets/github.svg';

export const calculateAge = date => {
  const today = new Date();
  const birthday = new Date(date);
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
};

export const getSocialMediaIcon = type => {
  switch (type) {
    case 'codepen':
      return <Codepen height="32" width="32" />;
    case 'bitbucket':
      return <Bitbucket height="32" width="32" />;
    case 'github':
      return <Github height="32" width="32" />;
    default:
      return null;
  }
};
