export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: string;
  bg: string;
  image: string | null;
  gallery: string[];
  description: string;
  shopifyUrl: string;
  soldOut: boolean;
}

export const products: Product[] = [
  {
    id: '01',
    slug: 'ash-glaze-serving-bowl',
    name: 'Ash-glaze Serving Bowl',
    category: 'Pottery',
    price: '€ 68',
    bg: '#C8C3BA',
    image: 'https://cdn.prod.website-files.com/658f544331d16c0a01bd6937/69bc63500574095e30efcdd0_IMG_0748.JPG',
    gallery: [
      'https://cdn.prod.website-files.com/658f544331d16c0a01bd6937/69bc63500574095e30efcdd0_IMG_0748.JPG',
    ],
    description: 'Hand-thrown in Iceland from local stoneware clay. The natural ash glaze creates a unique surface finish — no two bowls are ever the same. Suitable for everyday use, food safe.',
    shopifyUrl: 'https://your-store.myshopify.com/products/ash-glaze-bowl',
    soldOut: false,
  },
  {
    id: '02',
    slug: 'wabi-sabi-vase-small',
    name: 'Wabi-sabi Vase — Small',
    category: 'Pottery',
    price: '€ 42',
    bg: '#BEB9B0',
    image: 'https://cdn.prod.website-files.com/658f544331d16c0a01bd6937/69bc635066720bf2459ae5cd_IMG_0749.JPG',
    gallery: [
      'https://cdn.prod.website-files.com/658f544331d16c0a01bd6937/69bc635066720bf2459ae5cd_IMG_0749.JPG',
    ],
    description: 'Embracing the beauty of imperfection. Each vase is unique in form and glaze, celebrating the wabi-sabi philosophy. Perfect for a single stem or small dried arrangement.',
    shopifyUrl: 'https://your-store.myshopify.com/products/wabi-vase-small',
    soldOut: false,
  },
  {
    id: '03',
    slug: 'espresso-cup',
    name: 'Espresso Cup',
    category: 'Pottery',
    price: '€ 32',
    bg: '#C4BEB5',
    image: null,
    gallery: [],
    description: 'Handcrafted espresso cup with a comfortable handle and thick walls that keep your shot warm. Each cup is wheel-thrown and food safe.',
    shopifyUrl: 'https://your-store.myshopify.com/products/espresso-cup',
    soldOut: false,
  },
  {
    id: '04',
    slug: 'lavender-clay-soap',
    name: 'Lavender & Clay Soap',
    category: 'Soap',
    price: '€ 12',
    bg: '#D0CAC1',
    image: null,
    gallery: [],
    description: 'Cold-process soap with organic lavender essential oil and kaolin clay. Gentle and moisturising, suitable for all skin types. Approximately 110g per bar.',
    shopifyUrl: 'https://your-store.myshopify.com/products/lavender-clay-soap',
    soldOut: false,
  },
  {
    id: '05',
    slug: 'goat-milk-rose-soap',
    name: 'Goat Milk Rose Soap',
    category: 'Soap',
    price: '€ 13',
    bg: '#B8B3AB',
    image: null,
    gallery: [],
    description: 'Rich lather with real goat milk and Bulgarian rose water. Deeply nourishing and naturally gentle. Approximately 110g per bar.',
    shopifyUrl: 'https://your-store.myshopify.com/products/goat-milk-rose-soap',
    soldOut: false,
  },
  {
    id: '06',
    slug: 'soap-gift-set',
    name: 'Soap Gift Set — 3 bars',
    category: 'Soap',
    price: '€ 34',
    bg: '#D4CFC8',
    image: null,
    gallery: [],
    description: 'A curated set of three hand-made soaps, beautifully wrapped. A perfect gift. Bars vary by season — always a thoughtful surprise.',
    shopifyUrl: 'https://your-store.myshopify.com/products/soap-gift-set',
    soldOut: false,
  },
];
