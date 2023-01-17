import { NextFunction, Request, Response, Router } from "express";
import Controller from "utils/interface/controller.interface";

class TodoController implements Controller {
  public path = "/todo";
  public route = Router();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.route.get(`${this.path}`, this.helloWorld);
  }

  private helloWorld(req: Request, res: Response, next: NextFunction): void {
    res.status(200).json("Hello world");
  }
}

export default TodoController;
