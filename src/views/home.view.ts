import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-view')
export class HomeView extends LitElement {
  render() {
    return html`<h1>Home</h1>`;
  }
}