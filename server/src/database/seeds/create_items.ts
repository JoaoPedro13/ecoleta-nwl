import Knex from 'knex';
export const seed = async (knex: Knex) => {
  await knex('items').insert([
    {title: 'Lâmpadas', image: 'lampadas'},
    {title: 'Resíduos Eletrónicos', image: 'residuosEletronicos'},
    {title: 'Óleos de Cozinha', image: 'oleos'},
    {title: 'Pilhas e Baterias', image: 'pilhas'},
    {title: 'Papeis e Cartão', image: 'papel'},
    {title: 'Resíduos Orgânicos', image: 'organicos'},
  ]);
};
