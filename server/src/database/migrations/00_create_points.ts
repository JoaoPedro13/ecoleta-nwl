import Knex from 'knex';

export const up = async (knex: Knex) => {
  return knex.schema.createTable('points', (table) => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('district').notNullable();
  });
};

export const down = async (knex: Knex) => {
  return knex.schema.dropTable('points');
};
