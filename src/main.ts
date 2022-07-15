import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { router } from './stores/router.store';
import { HomeView } from './views/home.view';
import { CategoryView } from './views/category.view';

@customElement('main-layout')
class MainLayout extends LitElement {
  @state()
  private page;

  private readonly routeMapping = {
    home: HomeView,
    category: CategoryView,
  }

  constructor() {
    super();

    router.subscribe(this.onRouterChanged.bind(this));
  }

  private onRouterChanged(page) {
    this.page = page;
  }

  private onNavItemClicked(e: MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;

    router.open(new URL(target.href).pathname);
  }

  render() {
    const view = this.routeMapping[this.page?.route];

    return html`
      <nav>
        <ul @click=${this.onNavItemClicked}>
          <li><a href="/">Home</a></li>
          <li><a href="/categories/herren">Category</a></li>
          <li><a href="/categories/damen">Category</a></li>
        </ul>
      </nav>
      ${view ? new view(this.page.params) : ''}
    `;
  }
}

const layout = new MainLayout();
document.body.appendChild(layout);
