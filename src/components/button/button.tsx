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
      <button class="border pad-m-y pad-l-x size-m bg-dark color-white">
        <span class="anim"></span>
        <span class="anim"></span>
        <span class="anim"></span>
        <span class="anim"></span>

        <slot />
      </button>
    )
  }
}
