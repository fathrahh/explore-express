import { Sequelize } from "sequelize";
import { pgDBConfig } from "./env.config";

const { host, database, password, username, port } = pgDBConfig;

const sequelize = new Sequelize({
  host,
  port,
  database,
  username,
  password,
  dialect: "postgres",
});

export default sequelize;
