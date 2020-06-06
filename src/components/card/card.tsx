import { Component, h } from '@stencil/core';

@Component({
  tag: 'var-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  render() {
    return <slot />;
  }
}
