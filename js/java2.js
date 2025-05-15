const app = document.getElementById('app');

function createElement(type, className, content) {
  const el = document.createElement(type);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}


const header = createElement('header', 'header');
header.appendChild(createElement('div', 'logo', 'YOUR LOGO'));
header.appendChild(createElement('div', 'titulo', 'THE BLOG'));


const seccion = createElement('section', 'seccion');

const seccionImg = document.createElement('img');

const seccionTexto = createElement('div', 'textoimg');
seccionTexto.innerHTML = `
  <h2><em>New Season</em><br><strong>Fashion Trends</strong></h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
`;
const shopBtn = createElement('button', 'boton', 'Shop Now');
shopBtn.onclick = () => alert('Shop Now clicked');
seccionTexto.appendChild(shopBtn);

seccion.append(seccionTexto, seccionImg);

const tituloo = createElement('h2', 'titulo', 'Fashion Hits');

const allcolumnas = createElement('div', 'columnas');

const items = [
  { img: '../recursos/ropa1.jpeg', title: 'ropa1' },
  { img: '../recursos/ropa2.jpg', title: 'ropa2' },
  { img: '../recursos/ropa3.jpeg', title: 'ropa3' },
];

items.forEach(item => {
  const columna = createElement('div', 'column');
  const img = document.createElement('img');
  img.src = item.img;
  img.alt = item.title;

  const titulo = createElement('div', 'column', item.title);
  const desc = createElement('p', '', 'Lorem ipsum dolor sit amet, consectetur.');
  const boton = createElement('button', 'boton', 'Read more');
  boton.onclick = () => alert(`Read more: ${item.title}`);

 columna.append(img, titulo, desc, boton);
  allcolumnas.appendChild(columna);
});


const ultimg = createElement('div', 'imagenfinal');

const left = createElement('div', 'left');
left.innerHTML = `
  <h3 style="color: coral;">The Best<br><strong style="color:#333">Collection</strong></h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
`;
const shopNowBtn = createElement('button', 'boton', 'Shop Now');
shopNowBtn.onclick = () => alert('Shop Now clicked');
left.appendChild(shopNowBtn);

const right = createElement('div', 'right');
ultimg.append(left, right);


app.append(header, seccion, tituloo, allcolumnas, ultimg);
