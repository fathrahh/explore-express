import { Sequelize } from "sequelize";
import { pgDBConfig } from "./env.config";

export default function pgConnect() {
  const { host, database, password, username, port } = pgDBConfig;
  const operatorsAliases: any = false;

  const sequelize = new Sequelize({
    host,
    port,
    database,
    username,
    password,
    dialect: "postgres",
    operatorsAliases,
    logging: true,
  });

  return sequelize;
}
