import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary()

        table.string("name").notNullable()
        table.string("avatar").notNullable()
        table.string("email").notNullable()
        table.specificType('ensurances', 'text ARRAY');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users")
}
