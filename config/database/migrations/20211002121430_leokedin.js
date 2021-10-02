import knex from 'knex'

export async function up(knex) {
    return knex.schema.createTable('tokens', table => {
        table.increments('id').primary()
        table.string('clientId').notNullable()
        table.string('token').notNullable()
        table.dateTime('expires').notNullable()
        table.dateTime('createdAt').notNullable()
        table.dateTime('updatedAt')
    })
}

export async function down(knex) {
    return knex.schema.dropTable('tokens')
}