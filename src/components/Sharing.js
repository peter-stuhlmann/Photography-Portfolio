import React from 'react';
import styled from 'styled-components';

export const ShareButtons = props => {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    color,
    fontSize,
    heading,
    marginX,
    maxWidth,
    options,
    paddingX,
    width,
  } = props;

  const share = options || defaultOptions;

  return (
    <StyledShare
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      color={color}
      fontSize={fontSize}
      marginX={marginX}
      maxWidth={maxWidth}
      paddingX={paddingX}
      width={width}
    >
      <h3>{heading || defaultHeading}</h3>

      {share.map(button => (
        <a
          key={button.href}
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d={button.icon} />
          </svg>

          <span>{button.title}</span>
        </a>
      ))}
    </StyledShare>
  );
};

const StyledShare = styled.aside`
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin: ${props => props.marginX || '0 auto 50px auto'};
  max-width: ${props => props.maxWidth || '100%'};
  padding: ${props => props.paddingX || '15px 0'};
  width: ${props => props.width || '100%'};

  h3 {
    margin-bottom: 9px;
  }

  a {
    text-decoration: none;
    display: inline-block;
    font-size: ${props => props.fontSize || '12px'};
    border-radius: ${props => props.borderRadius || '3px'};
    color: ${props => props.color || '#282828'};
    background-color: ${props => props.backgroundColor || '#f8f8f8'};
    border: 1px solid ${props => props.borderColor || '#ccc'};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);
    line-height: 23px;
    padding: 1px 8px;
    margin-bottom: 5px;
    margin-right: 6px;
    transition: 0.2s ease all;

    svg {
      fill: ${props => props.color || '#282828'};
      height: ${props => props.fontSize || '15px'};
      margin: 0 5px -3px 0;
    }
  }
`;

const defaultHeading = 'Diese Seite teilen';

const defaultOptions = [
  {
    title: 'WhatsApp',
    icon:
      'M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z',
    href: `https://api.whatsapp.com/send?text=${window.location.href}`,
  },
  {
    title: 'Facebook',
    icon:
      'M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z',
    href: `https://facebook.com/sharer.php?u=${window.location.href}`,
  },
  {
    title: 'Twitter',
    icon:
      'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
    href: `https://twitter.com/intent/tweet?text=${window.location.href}`,
  },
  {
    title: 'LinkedIn',
    icon:
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`,
  },
  {
    title: 'E-Mail',
    icon:
      'M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z',
    href: `mailto:?body=${window.location.href}`,
  },
];
