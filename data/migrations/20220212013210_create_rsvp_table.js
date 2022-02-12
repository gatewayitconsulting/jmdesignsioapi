exports.up = (knex) => {
    return knex.schema
        .createTable('rsvps', function (table) {
            table.increments('id');
            table.string('firstName', 255).notNullable();
            table.string('lastName', 255).notNullable();
            table.string('email', 255);
            table.string('phone', 255);
            table.string('guestFirstName', 255);
            table.string('guestLastName', 255);
            table.string('diet', 255);
            table.string('songRequest', 255);
            table.string('notes', 255);
            table.timestamps();
        });
};

exports.down = (knex) => {
    return knex.schema
        .dropTable('rsvps');
};