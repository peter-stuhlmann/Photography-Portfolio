export function meta(attribute, name, content) {
  document
    .querySelector('meta[' + attribute + '=' + name + ']')
    .setAttribute('content', content);
}
