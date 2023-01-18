import pgConnect from "./config/db.config";
import express, { Application } from "express";
import { Sequelize } from "sequelize";
import cors from "cors";
import morgan from "morgan";
import Controller from "utils/interface/controller.interface";
import Todo from "./model/todo.model";
import sequelize from "./config/db.config";

class App {
  private express: Application;
  private port: number;

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initialiseDatabase();
    this.initialiseMiddleware();
    this.initialiseController(controllers);
  }

  private initialiseDatabase() {
    sequelize.sync({});
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

  public async listen() {
    this.express.listen(this.port, () => {
      console.log(`Test App listening on port ${this.port}`);
    });
  }
}

export default App;
