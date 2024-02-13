module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", "5432"),
      database: env("DATABASE_NAME", "rent_srl"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "kobir"),
      schema: env("DATABASE_SCHEMA", "public"),
      ssl: false,
    },
    debug: false,
  },
});
