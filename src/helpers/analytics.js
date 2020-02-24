import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

export const trackingCode = 'UA-XXXXXXXX-X';

ReactGA.initialize(trackingCode);
ReactGA.set({ anonymizeIp: true });

export const ga = (WrappedComponent, options = {}) => {
  if (document.cookie.indexOf(`${trackingCode}=true`) > -1) {
    window[`ga-disable-${trackingCode}`] = true;
  }

  const trackPage = page => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = props => {
    useEffect(() => trackPage(props.location.pathname), [
      props.location.pathname,
    ]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};
