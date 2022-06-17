import { router } from './router.store';

function mapRoute(page) {
  console.log(page);
}

router.subscribe(mapRoute);

const bu1 = document.createElement('button');
bu1.innerText = 'home';

bu1.addEventListener('click', () => router.open('/'));

document.body.appendChild(bu1);

const bu2 = document.createElement('button');
bu2.innerText = 'cat';

bu2.addEventListener('click', () => router.open('/categories/1'));

document.body.appendChild(bu2);

const bu3 = document.createElement('button');
bu3.innerText = 'cat filtered';

bu3.addEventListener('click', () => router.open('/categories/1?name=shirts'));

document.body.appendChild(bu3);

const link1 = document.createElement('a');
link1.href = '/';
link1.innerText = 'home';
document.body.appendChild(link1);

const link2 = document.createElement('a');
link2.href = '/categories/1';
link2.innerText = 'cat';
document.body.appendChild(link2);

const link3 = document.createElement('a');
link3.href = '/categories/1?name=shirts';
link3.innerText = 'cat filtered';
document.body.appendChild(link3);