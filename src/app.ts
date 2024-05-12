import express from "express";
import type { Application, Response, Request } from "express";

const createApp = (): Application => {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
  });

  return app;
};

export default createApp;
