// Dados temporários para desenvolver a interface.
// TODO: remover quando a integração com a API (GET /products) for feita.

const placeholderImg =
  'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg'

export const mockProducts = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name:
    index % 3 === 0
      ? 'Computador Gamer XT com suporte e 16GB de memória e processador turbo plus'
      : 'Computador Gamer XT',
  price: 5000.0,
  imgUrl: placeholderImg,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  categories: [
    { id: 2, name: 'Eletrônicos' },
    { id: 3, name: 'Computadores' },
  ],
}))
