exports.up = knex =>
    knex.schema.createTable("car", tbl => {
        tbl.increments();
        tbl.string("first_name", 60);
        tbl.string("last_name", 60);
        tbl.string("email");
        tbl.string("country");
        tbl.string("car_model");
        tbl.string("car_model_year");
        tbl.string("car_color");
        tbl.string("gender");
        tbl.string("job_title");
        tbl.text("bio", 256).notNullable();
    });

exports.down = knex => knex.schema.dropTableIfExists("car");