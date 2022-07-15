export class Category {
  name: string;
}

const categories: Category[] = [
  {
    name: 'herren',
  },
  {
    name: 'damen',
  }
]

export function getCategoryByName(name: string): Promise<Category> {
  return new Promise((resolve) => {
    const category = categories.find((cat) => cat.name === name);
    setTimeout(resolve.bind(this, category), 100);
  })
}