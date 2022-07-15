import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { Category } from '../api/category.api';
import { categoryStore, updateCategoryAction } from '../stores/category.store';

@customElement('category-view')
export class CategoryView extends LitElement {
  @state()
  private category: Category;

  constructor(params: { categoryName: string; }) {
    super();

    categoryStore.subscribe(this.onCategoryStoreChanged.bind(this));
    updateCategoryAction(params.categoryName);
  }

  private onCategoryStoreChanged(category: Category) {
    this.category = category;
  }

  render() {
    return html`
      <h1>Category ${this.category?.name}</h1>
    `;
  }
}