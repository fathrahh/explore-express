import pgConnect from "./config/db.config";
import express, { Application } from "express";
import { Sequelize } from "sequelize";
import cors from "cors";
import morgan from "morgan";
import Controller from "utils/interface/controller.interface";

class App {
  private express: Application;
  private port: number;
  public db: any = {};

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseDatabase();
    this.initialiseMiddleware();
    this.initialiseController(controllers);
  }

  private async initialiseDatabase() {
    this.db = pgConnect();

    try {
      await this.db.authenticate();
      console.log("Connection has been established successfully");
    } catch (err) {
      console.error("Unable to connect to the database:", err);
    }
  }

  private initialiseMiddleware(): void {
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
  }

  private initialiseController(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.express.use(`/api`, controller.route);
    });
  }

  public listen() {
    const { PORT } = process.env;
    console.log(PORT);

    this.express.listen(this.port, () => {
      console.log(`Test App listening on port ${this.port}`);
    });
  }
}

export default App;
