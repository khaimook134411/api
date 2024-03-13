import express, { Express, Request, Response } from "express";
import { setupLogging } from "./morgan";
import { setupProxies } from "./proxy";
import { ROUTES } from "./route";

const app: Express = express();
const port = process.env.PORT || 3000;

setupLogging(app);
setupProxies(app, ROUTES);

app.get("/hello", (req: Request, resp: Response) => {
  return resp.send("HELLO WORLD!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
