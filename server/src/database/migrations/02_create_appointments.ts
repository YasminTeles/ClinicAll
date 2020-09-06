import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("appointments", table => {
        table.increments("id").primary()

        table.date("date").notNullable()
        table.integer("time").notNullable()
        table.string("speciality").notNullable()
        table.float("price").notNullable()
        table.specificType('annotations', 'text ARRAY');

        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

        table.integer("doctor_id")
            .notNullable()
            .references("id")
            .inTable("doctors")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("appointments")
}
