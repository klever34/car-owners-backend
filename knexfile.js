require("dotenv").config();

module.exports = {
    development: {
        client: "pg",
        connection: {
            host: "127.0.0.1",
            user: "pguser",
            password: "mypass",
            database: "api",
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: { directory: "./data/seeds" },
    },

    testing: {
        client: "pg",
        connection: {
            host: "127.0.0.1",
            user: "pguser",
            password: "mypass",
            database: "api",
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: { directory: "./data/seeds" },
    },

    production: {
        client: "pg",
        connection: {
            host: "127.0.0.1",
            user: "pguser",
            password: "mypass",
            database: "api",
        },
        migrations: {
            directory: "./data/migrations",
        },
        seeds: { directory: "./data/seeds" },
    },
};