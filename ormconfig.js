require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    synchronize: false,
    logging: true,
    entities: [
      "**/modules/**/entities/*.js"
    ],
    migrations: [
      "src/database/migrations/**/*.ts"
    ],
    cli: {
      migrationsDir: "src/database/migrations/",
      entitiesDir: "**/modules/**/entities"
    }  
}