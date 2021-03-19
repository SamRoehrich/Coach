import "reflect-metadata";
import express from "express";
import { createConnection, getConnectionOptions } from "typeorm";
import cors from "cors";
// import http from "http";
// import ws from "ws";

// import { Athlete } from "./entity/Athlete"
// import { Team } from "./entity/Team"
// import { User } from "./entity/User"

(async () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  process.env.NODE_ENV == "production"
    ? await createConnection({
        ...connectionOptions,
      })
    : await createConnection();

  app.get("/", (_req, res) => res.send("hello from the base route"));

  app.listen(5000, () => {
    console.log("server running on port 5000");
  });
})();
