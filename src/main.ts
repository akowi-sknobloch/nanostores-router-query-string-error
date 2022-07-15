import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('main-element')
class MainElement extends LitElement {
  render() {
    return html`<h1>Hello World</h1>`;
  }
}

const elem = new MainElement();
document.body.appendChild(elem);
