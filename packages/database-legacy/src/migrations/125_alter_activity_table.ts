/*
                      ====== IMPORTANT NOTICE ======

DO NOT EDIT OR RENAME THIS FILE

This is a migration file. Once created the file should not be renamed or edited,
because migrations are only run once on the production server. 

If you find that something was incorrectly set up in the `up` function you
should create a new migration file that fixes the issue.

*/

import { Knex } from 'knex'

export async function up(knex: Knex) {
  await knex.schema.alterTable('activity', function (table) {
    table.integer('start').notNullable().defaultTo(0)
    table.integer('end').notNullable().defaultTo(0)
  })
}

export async function down(knex: Knex) {
  await knex.schema.alterTable('activity', function (table) {
    table.dropColumn('start')
    table.dropColumn('end')
  })
}
