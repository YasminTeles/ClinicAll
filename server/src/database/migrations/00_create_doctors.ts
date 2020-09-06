import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable("doctors", table => {
        table.increments("id").primary()

        table.string("name").notNullable()
        table.string("avatar").notNullable()
        table.string("speciality").notNullable()
        table.float("price").notNullable(),
        table.specificType('ensurances', 'text ARRAY');
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("doctors")
}
