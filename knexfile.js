require("dotenv").config();

module.exports = {
    development: {
        client: "pg",
        connection : 'postgres://uliewsgshtuzfi:6a0cc9084347a67184dad4e460de7c4e059de63b9b0c50f3e94e60437afaa4f1@ec2-54-210-128-153.compute-1.amazonaws.com:5432/d2bqn4a89df7f0?ssl=true',
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
        connection : 'postgres://uliewsgshtuzfi:6a0cc9084347a67184dad4e460de7c4e059de63b9b0c50f3e94e60437afaa4f1@ec2-54-210-128-153.compute-1.amazonaws.com:5432/d2bqn4a89df7f0?ssl=true',
        migrations: {
            directory: "./data/migrations",
        },
        seeds: { directory: "./data/seeds" },
    },
};