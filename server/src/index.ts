import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { DataSource } from "typeorm";

const main = async () => {
    await new DataSource({
        type: "mysql",
        database: "CS-Demo",
        username: "root",
        password: "",
        logging: true,
        synchronize: false,
        entities: [],
         
    })

    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(3000, () => {
        console.log("SERVER RUNNING ON PORT 3000");
    })
}

main().catch((err) => {
    console.log("ERROR: ", err);
})