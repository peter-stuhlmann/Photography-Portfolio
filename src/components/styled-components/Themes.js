import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#282828',
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});

export const cardBackground = theme('mode', {
  light: '#28282828',
  dark: '#1c1c1c',
});

export const codeBackground = theme('mode', {
  light: '#ededed',
  dark: '#1c1c1c',
});

export const buttonBackgroundColor = theme('mode', {
  light: '#efefef',
  dark: '#1c1c1c',
});

export const buttonBackgroundColorHover = theme('mode', {
  light: '#d2d0d0',
  dark: '#333333',
});

export const buttonTextColor = theme('mode', {
  light: '#000',
  dark: '#fff',
});
