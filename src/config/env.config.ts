import dotEnv from "dotenv";
dotEnv.config();

const getConfig = (key: string): string => {
  const config = process.env[key];
  if (!config) throw key + " tidak ada di env";
  return config;
};

export const pgDBConfig = {
  username: getConfig("PGUSER"),
  port: Number(getConfig("PGPORT")),
  host: getConfig("PGHOST"),
  database: getConfig("PGDATABASE"),
  password: getConfig("PGPASSWORD"),
};
