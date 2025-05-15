const app = document.getElementById('app');


function createElement(type, className, content) {
  const el = document.createElement(type);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}


const header = createElement('header', 'header');
const logo = createElement('div', '', 'YOUR LOGO');

const nav = createElement('nav', 'nav');
['News', 'About us', 'Trends', 'Training'].forEach(item => {
  const link = createElement('a', '', item);
  link.href = '#';
  nav.appendChild(link);
});
header.append(logo, nav);


const seccion = createElement('section', 'seccion');
const seccionImg = document.createElement('img');
seccionImg.src = '../recursos/ejercicio4.jpeg'; 
seccionImg.alt = 'Workout seccion';

const cuadro = createElement('div', 'cuadro');
cuadro.innerHTML = `
  <h1>WORK<span style="color:yellow">OUT</span></h1>
  <p>Fitness Training for Everyone</p>
`;
const seccionBtn = createElement('button', '', 'Read More');
seccionBtn.onclick = () => alert("Read more clicked");
cuadro.appendChild(seccionBtn);

seccion.append(seccionImg, cuadro);


const oferta = createElement('section', 'oferta');
oferta.innerHTML = `
  <h2><strong>Subscribe</strong><br>our Newsletter</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt...</p>
  <div class="promo">SAVE UP TO 30%</div>
`;
const subBtn = createElement('button', 'botonnegro', 'GET IT NOW');
subBtn.onclick = () => alert("Subscribed!");
oferta.appendChild(subBtn);


const columnsSeccion = createElement('section', 'columnas');

const posts = [
  {
    img: '../recursos/ejercicio1.jpeg',
    title: 'BUILD YOUR BODY',
    text: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    img: '../recursos/ejercicio2.jpg',
    title: 'Training Everyday',
    text: 'Exercising keeps you strong and healthy.',
  },
  {
    img: '../recursos/ejercicio3.webp',
    title: 'MORE STRONGER',
    text: 'Find more tips in our blog.',
  }
];

posts.forEach(post => {
  const column = createElement('div', 'column');
  const img = document.createElement('img');
  img.src = post.img;
  img.alt = post.title;

  const content = createElement('div', 'columncon');
  const h3 = createElement('h3', '', post.title);
  const p = createElement('p', '', post.text);
  content.append(h3, p);

  column.append(img, content);
  columnsSeccion.appendChild(column);
});


const footer = createElement('footer', 'footer');
footer.innerHTML = `<div>Unsubscribe | Settings | Privacy policy</div>`;

app.append(header, seccion, oferta, columnsSeccion, footer);
