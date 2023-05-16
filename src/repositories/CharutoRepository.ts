import { appDataSource } from "../data-source";
import Charuto from "../entities/Charuto";

export const CharutoRepository = appDataSource.getRepository(Charuto);
