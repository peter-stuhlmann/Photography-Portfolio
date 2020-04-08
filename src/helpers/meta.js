export function meta(attribute, name, content) {
  const meta = document.createElement('meta');
  meta.setAttribute(attribute, name);
  meta.content = content;
  document.getElementsByTagName('head')[0].appendChild(meta);
}
