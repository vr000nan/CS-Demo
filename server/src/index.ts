import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { DataSource } from "typeorm";
import { Users } from "./entities/users";

const main = async () => {
    console.log("BEGINNING...");

    const dataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        database: "CS-Demo",
        username: "root",
        password: "8Fifteenpm",
        logging: true,
        synchronize: true,
        entities: [Users],
    });

    try {
        await dataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        return; 
    }

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true,
    }));
  
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
};

main().catch((err) => {
    console.error("Unhandled exception in main:", err);
});
