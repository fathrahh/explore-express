import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelize from "../config/db.config";

interface TodoAttributes {
  id: number;
  task: string;
}

export interface TodoInput extends Optional<TodoAttributes, "id"> {}
export interface TodoOutput extends Required<TodoAttributes> {}

class Todo extends Model<TodoAttributes, TodoInput> {
  public id!: number;
  public task!: string;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    task: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
  }
);

export default Todo;
