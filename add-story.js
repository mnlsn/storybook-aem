import { storiesOf } from '@storybook/html';
import Compiler from 'htl-compiler/dist/compiler-esm';

export default function(storyOf, addName, template, resourceResolver, useModels, resourceTypes) {
  new Compiler(template, resourceResolver, useModels, resourceTypes)
  .compile()
  .then(html => {
    storiesOf('HTL', module)
    .add('Hello world', () => {
      return createHTML(html)
    });
  });
}

function createHTML(htmlString) {
  const container = document.createElement('div');
  container.innerHTML = htmlString;
  return container;
}
