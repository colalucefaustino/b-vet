import { Categoria } from '../interfaces/categorias';

export const CATEGORIAS: Categoria[] = [
  {
    nombre: 'Alimento',
    id: 250,
    imgUrl: 'https://scontent.fros2-2.fna.fbcdn.net/v/t39.30808-6/411176503_379439304482437_2440966619540606446_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=0QdeSECyknwAX9ESQfS&_nc_ht=scontent.fros2-2.fna&oh=00_AfDp4hLFtqlfvmeX-EoujxDmQwmAu2V_KaUYx8aBDEpdqw&oe=658084D8',
    productos: [
      {
        id: 1,
        nombre: 'Pro Plan regular para Perros',
        precio: 10000,
        ingredientes: ["Formulado con carne fresca de pollo como ingrediente principal, además de vitaminas y minerales esenciales, PRO PLAN® Puppy Razas Medianas ofrece una óptima nutrición para cachorros en crecimiento"],
        imagen:
          'https://www.universomascota.com.ar/wp-content/uploads/2020/09/7613287031051_1.png',
      },
      {
        id: 2,
        nombre: 'Pro Plan Weight Control para Perros',
        precio: 13500,
        ingredientes: ['Fórmula seca especializada para perros con sobrepeso y menos activos de más de 50 libras. La relación proteína-grasa está optimizada para mantener la masa muscular durante la pérdida de peso'],
        imagen:
          'https://www.purina.com/sites/default/files/products/2022-11/ppdog_spcl_a_wm_largebreed_hero_f_20.png',
      },
      {
        id: 3,
        nombre: 'Pro Plan regular para Gatos',
        precio: 7500,
        ingredientes: ["Alimento completo y balanceado para gatos adultos de todas las razas."],
        imagen:
          'https://acdn.mitiendanube.com/stores/068/331/products/purina-pro-plan-gatos-adult_01-bf0c27192d82bac20f16170480372606-640-0.png',
      },
      
      {
        id: 4,
        nombre: 'Pro Plan Weight Control para Gatos',
        precio: 9750,
        ingredientes: ["Fórmula con para ayudar a favorecer la pérdida de grasa corporal al mismo tiempo que se mantiene la masa muscular."],
        imagen:
          'https://www.proplanveterinarydiets.ca/sites/default/files/styles/social_share_large/public/ppvd-om-overweight-management-feline-formulas-family-product-1.png?itok=fW8Eea9u',
      },
      {
        id: 5,
        nombre: 'Cunipic para Conejos',
        precio: 11500,
        ingredientes: ["pellets completos y equilibrados especialmente creado para conejos adultos. Este alimento se presenta en forma de pienso multipartícula compuesto por un 60% de barritas y un 40% de cereales"],
        imagen:
          'https://static.miscota.com/media/1/photos/products/508943/PCOAD2-1-6458c99923bdd_g.png',
      },
      {
        id: 6,
        nombre: 'Tetra para peces',
        precio: 2500,
        ingredientes: ["Alimento para peces Tetra Goldfish de 200gr, en formato de escamas, ideal para peces de agua fría."],
        imagen:
          'https://acuariooasis.com.ar/wp-content/uploads/2020/05/Tetra-Fin.png',
      },
    ],
  },
  {
    nombre: 'Medicamento',
    id: 234,
    imgUrl:
      'https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/411120304_379439294482438_413705402952507145_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Mex9sY74CZMAX_SeZUI&_nc_ht=scontent.fros2-1.fna&oh=00_AfAebVQRwPe3d27D3ccBZb_FSZWqCgmQnJXfDog03j1YCw&oe=657F604D',
    productos: [
      {
        id: 7,
        nombre: 'Pipeta para pulgas Power Ultra',
        precio: 2000,
        ingredientes: ['Pulguicida, Garrapaticida. Repelente de Mosquitos y Flebótomos.'],
        imagen:
          'https://traviesospetshop.com.ar/wp-content/uploads/2019/11/pipeta-power-11-a-20.png',
      },
      {
        id: 8,
        nombre: 'Comprimidos masticables desparasitarios',
        precio: 1200,
        ingredientes: ['comprimido masticable fácil y sabroso con un efecto rápido, protegiendo a tu perro de pulgas y garrapatas durante mínimo 30 días.'],
        imagen:
          'https://frontlinemascotas.es/sites/default/files/2022-12/680x460_bodegon_desktop.png',
      },
      {
        id: 9,
        nombre: 'Analgésico antinflamatorio Previcox',
        precio: 1750,
        ingredientes: ['Analgésico para el tratamiento del dolor crónico asociado a las inflamaciones. y garrapatas durante mínimo 30 días.'],
        imagen:
          "https://traviesospetshop.com.ar/wp-content/uploads/2023/04/para-pagina-web-1.png"
      },
      {
        id: 10,
        nombre: 'Reliverán Dozi 20 mg',
        precio: 1500,
        ingredientes: ['Es para personas, pero un dosis reducida del medicamento ayuda a los dolores estomacales de'],
        imagen:
          'https://www.gador.com.ar/wp-content/uploads/2021/09/ReliveranDoxi-850x638.png',
      },

    ],
  },
  {
    nombre: 'Accesorios',
    id: 2,
    imgUrl:
      'https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/411129011_379439291149105_2544200866130082264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=9_gdtuWwnT4AX98IOUc&_nc_ht=scontent.fros2-1.fna&oh=00_AfCTmuqlpOUQL1wb9scOclZR3r8fPK4jxH1-CzrFovmrvg&oe=657F44F6',
    productos: [
      {
        id: 11,
        nombre: 'Collares',
        precio: 2250,
        ingredientes: ["Collares de poliéster livianos y muy resistentes! 8 colores para elegir"],
        imagen: 'https://i0.wp.com/mascotasduo.com.ar/wp-content/uploads/2021/06/collar-perro-talle-8.webp?fit=1024%2C1024&ssl=1',
      },
      {
        id: 12,
        nombre: 'Chapita personalizada',
        precio: 1850,
        ingredientes: ["Chapitas personalizables, elegí el nombre y la forma que quieras!"],
        imagen:
          'https://d22fxaf9t8d39k.cloudfront.net/d27d344eb1b404ce17beb2a129ee800739a0b9d120808a7145c2779f5368289c36560.png',
      },
      {
        id: 13,
        nombre: 'Chalequitos de lana',
        precio: 2800,
        ingredientes: ["Chalequitos hechos 100% de lana, cómodos e ideales para que tus mascotas no pasen frío. Vienen en 6 colores."],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_812926-MLA73194822987_122023-O.webp',
      },
      {
        id: 14,
        nombre: 'Arnés de gamuza',
        precio: 3700,
        ingredientes: ["Arnés para pasear a tu perro, incluye una correa de regalo."],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_679205-MLA44559344738_012021-O.webp',
      },
    ],
  },
  {
    nombre: 'Juguetes',
    id: 3,
    imgUrl:
      'https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/411158391_379439287815772_1603500812721205490_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=vSnj0vI6hNcAX9Rc8GW&_nc_ht=scontent.fros2-1.fna&oh=00_AfDlQJA1uvt7cJOhXX4w-L7XC57KAeRIOvX8X_Ep78Va3A&oe=6580546A',
    productos: [
      {
        id: 15,
        nombre: 'Huesito',
        precio: 750,
        ingredientes: ["Huesito para perros."],
        imagen:
          'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/340/952/products/hueso1-25550be604e613e1f016033194967271-640-0.png',
      },
      {
        id: 16,
        nombre: 'Cuerdita',
        precio: 1100,
        ingredientes: ["Cuerditas de muchos colores, muy resistentes!"],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_658191-MLA31787987586_082019-O.webp',
      },
      {
        id: 17,
        nombre: 'Pelotitas de tenis',
        precio: 2000,
        ingredientes: ["Pack de 3 pelotitas de tenis"],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_769352-MLA42141155171_062020-O.webp',
      },
      {
        id: 18,
        nombre: 'Cañita con ratita',
        precio: 1500,
        ingredientes: ["Cañita de madera con ratoncito de lana"],
        imagen:
          'https://blondi.com.ar/wp-content/uploads/2023/01/Varita-con-plumas-o-juguete-Juguetes-para-Gatos3.jpg',
      },
      {
        id: 19,
        nombre: 'Cajita de cartón para rasgar',
        precio: 300,
        ingredientes: ["Cajita de cartón diseñada para que tu gato pase horas rascándola."],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_778836-MLU72566437558_112023-O.webp',
      },
      {
        id: 20,
        nombre: 'Obillitos de lana',
        precio: 500,
        ingredientes: ["Obillitos de lana preparados para tu gatito, $500 c/u"],
        imagen:
          'https://http2.mlstatic.com/D_NQ_NP_725179-MLA72350078038_102023-O.webp',
      },
    ],
  },
];
