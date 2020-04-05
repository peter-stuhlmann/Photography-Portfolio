export function metaDescription(props) {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'description');
  meta.content = props;
  document.getElementsByTagName('head')[0].appendChild(meta);
}
