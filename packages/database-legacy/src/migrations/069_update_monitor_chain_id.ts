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
  await knex.schema.alterTable('update_monitor', function (table) {
    table.integer('chain_id').notNullable().defaultTo(1)

    table.dropPrimary()
    table.primary(['project_name', 'chain_id'])
  })
}

export async function down(knex: Knex) {
  await knex.schema.alterTable('update_monitor', function (table) {
    table.dropPrimary()
    table.primary(['project_name'])

    table.dropColumn('chain_id')
  })
}
