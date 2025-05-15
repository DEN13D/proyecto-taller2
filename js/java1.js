const app = document.getElementById('app');


function createElement(type, className, content) {
  const el = document.createElement(type);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}


const header = createElement('header', 'header');
const logo = createElement('div', 'logo', 'YOUR LOGO');
header.appendChild(logo);


const seccion = createElement('section', 'seccion');
const seccionImg = document.createElement('img');
seccionImg.src = '../recursos/shoes.jpg';
seccionImg.alt = 'Style';
seccionImg.className = 'imagen1';

const seccionText = createElement('h1', 'texto', 'STYLE');
seccion.appendChild(seccionImg);
seccion.appendChild(seccionText);

const promo = createElement('section', 'promocion');
const promoTitulo = createElement('h2', '', 'UP TO 50% OFF');
const promoTexto = createElement('p', '', 'Lorem ipsum dolor amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.');
const tiendabt = createElement('button', 'boton', 'SHOP NOW');
tiendabt.onclick = () => alert("SHOP NOW clicked");
promo.append(promoTitulo, promoTexto, tiendabt);


const imegen2 = createElement('section', 'imagen2');
const imgContainer = createElement('div', 'imagencontainer');
const modeloImg = document.createElement('img');
modeloImg.src = '../recursos/girl.jpg'; 
modeloImg.alt = 'New Style';
imgContainer.appendChild(modeloImg);

const textoContainer = createElement('div', 'textocontainer');
const titulo = createElement('h2', '', 'NEW STYLE');
const Texto = createElement('p', '', 'Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.');
const comprabotn = createElement('button', 'botonnegro', 'BUY NOW');
comprabotn.onclick = () => alert("BUY NOW clicked");
textoContainer.append(titulo, Texto, comprabotn);

imegen2.append(imgContainer, textoContainer);


const footer = createElement('footer', 'footer');
const follow = createElement('p', '', 'FOLLOW ALONG WITH US');
const iconos = createElement('div', 'iconos');
['📘', '📸', '🐦'].forEach(icon => {
  const span = document.createElement('span');
  span.textContent = icon;
  iconos.appendChild(span);
});
footer.append(follow, iconos);

app.append(header, seccion, promo, imegen2, footer);
