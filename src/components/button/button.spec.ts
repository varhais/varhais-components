import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('var-button', () => {
  it('renders', async () => {
    const {root} = await newSpecPage({
      components: [Button],
      html: 'var-button></my-component>'
    });
    expect(root).toEqualHtml(`
      var-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  it('renders with values', async () => {
    const {root} = await newSpecPage({
      components: [Button],
      html: `var-button first="Stencil" last="'Don't call me a framework' JS"></my-component>`
    });
    expect(root).toEqualHtml(`
      var-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });
});
