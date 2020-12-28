import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import cookieConsent from '../data/cookieConsent';
import { trackingCode } from '../helpers/analytics';

export default function CookieConsentBanner(props) {
  const { tracking, optInCookie, optOutCookie } = props;

  if (tracking === false) {
    document.cookie = `Disable ${trackingCode}=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = true;
  } else {
    document.cookie = `Disable ${trackingCode}=false; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    window[`ga-disable-${trackingCode}`] = false;
  }

  return (
    <CookieConsent
      location="top"
      buttonText={cookieConsent.accept}
      onAccept={() => {
        optInCookie();
      }}
      enableDeclineButton
      declineButtonText={cookieConsent.decline}
      onDecline={() => {
        optOutCookie();
      }}
      cookieName="cookie-consent"
      style={{ background: '#2B373B' }}
      buttonStyle={{
        backgroundColor: '#ffff00',
        borderRadius: '5px',
        color: '#000',
        fontSize: '13px',
      }}
      declineButtonStyle={{
        backgroundColor: '#424242',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '13px',
      }}
      expires={90}
    >
      {cookieConsent.message}
      <StyledLink to={cookieConsent.link.href}>
        {cookieConsent.link.text}
      </StyledLink>
    </CookieConsent>
  );
}

const StyledLink = styled(Link)`
  color: #fff;
`;
