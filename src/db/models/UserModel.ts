import { DataTypes } from "sequelize/types";
import { db } from "../db";

export const userModel = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }
})