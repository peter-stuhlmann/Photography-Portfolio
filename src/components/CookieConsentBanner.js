import React, { useContext } from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Context } from '../Context';

export default function CookieConsentBanner() {
  const { legal, optInTracking, optOutTracking } = useContext(Context);

  return (
    <CookieConsent
      location="top"
      buttonText={legal.cookieConsent.accept}
      onAccept={() => {
        optInTracking();
      }}
      enableDeclineButton
      declineButtonText={legal.cookieConsent.decline}
      onDecline={() => {
        optOutTracking();
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
      {legal.cookieConsent.message}
      <StyledLink to={legal.cookieConsent.link.href}>
        {legal.cookieConsent.link.text}
      </StyledLink>
    </CookieConsent>
  );
}

const StyledLink = styled(Link)`
  color: #fff;
`;
