import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'var-animate-border',
  styleUrl: 'animate-border.scss',
  shadow: true
})
export class AnimateBorder {
  @Prop() hasBorder = true;

  render() {
    return (
      <div class={!this.hasBorder ? 'no-border' : ''}>
        <span></span><span></span><span></span><span></span>
        <slot />
      </div>
    );
  }
}
