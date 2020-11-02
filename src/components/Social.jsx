import React from 'react';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

const StyledSocial = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1rem;
`;

const data = [
  {
    Icon: FiFacebook,
    title: 'Facebook',
    link: (url, title) => `https://www.facebook.com/sharer.php?u=${url}`,
  },
  {
    Icon: FiTwitter,
    title: 'Twitter',
    link: (url, title) => `https://twitter.com/share?url=${url}&text=${title}`,
  },
  {
    Icon: FiLinkedin,
    title: 'LinkedIn',
    link: (url, title) =>
      `https://www.linkedin.com/shareArticle?url=${url}&title=${title}`,
  },
  {
    Icon: RiWhatsappLine,
    title: 'WhatsApp',
    link: (url, title) => `https://api.whatsapp.com/send?text=${title} ${url}`,
  },
  {
    Icon: FaTelegramPlane,
    title: 'Telegram',
    link: (url, title) => `https://t.me/share/url?url=${url}&text=${title}`,
  },
];

const Social = () => {
  const location = useLocation();
  return (
    <StyledSocial>
      {data.map(({ Icon, title, link }, idx) => (
        <a
          key={idx}
          href={encodeURI(link(location.href, title))}
          title={`Compartir en ${title}`}
          rel={'noopener noreferrer'}
          target={'_blank'}
        >
          <Icon />
        </a>
      ))}
    </StyledSocial>
  );
};

export default Social;
