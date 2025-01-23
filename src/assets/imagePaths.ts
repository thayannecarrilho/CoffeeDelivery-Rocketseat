import img1 from './Image-1.svg'
import img2 from  './Image-2.svg'
import img3 from  './Image-3.svg'
import img4 from  './Image-4.svg'
import img5 from  './Image-5.svg'
import img6 from  './Image-6.svg'
import img7 from  './Image-7.svg'
import img8 from  './Image-8.svg'
import img9 from  './Image-9.svg'
import img10 from  './Image-10.svg'
import img11 from  './Image-11.svg'
import img12 from  './Image-12.svg'
import img13 from  './Image-13.svg'
import img14 from './Image.svg'

export const imagePaths = {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
};

export const products = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    imageUrl: imagePaths.img1,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    imageUrl: imagePaths.img2,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    imageUrl: imagePaths.img3,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    imageUrl: imagePaths.img4,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meia a meia de expresso tradicional com leite vaporizado',
    price: 9.9,
    imageUrl: imagePaths.img5,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    imageUrl: imagePaths.img6,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    imageUrl: imagePaths.img7,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    imageUrl: imagePaths.img8,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    imageUrl: imagePaths.img9,
    tags: ['Tradicional', 'Com Leite'],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    imageUrl: imagePaths.img10,
    tags: ['Especial', 'Com Leite'],
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    imageUrl: imagePaths.img11,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    imageUrl: imagePaths.img12,
    tags: ['Especial'],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    imageUrl: imagePaths.img13,
    tags: ['Especial'],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    imageUrl: imagePaths.img14,
    tags: ['Especial', 'Alcoólico'],
  },
];
