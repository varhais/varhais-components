import { Component, Prop, h } from '@stencil/core';
import { ButtonSize } from './intefaces'

@Component({
  tag: 'var-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop() size: ButtonSize;

  render() {
    return (
      <var-animate-border>
        <button>
            <slot />
        </button>
      </var-animate-border>
    )
  }
}
