import { DataSource } from "typeorm";
import { Charuto } from "./entities/Charuto";
import 'dotenv/config'
import 'reflect-metadata'

const TYPEORMPORT = process.env.TYPEORM_PORT as number | undefined;

export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.TYPEORM_HOST,
    port: TYPEORMPORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Charuto]
})
