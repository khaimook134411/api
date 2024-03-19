import express, { Express, Request, Response } from "express";
import { setupLogging } from "./morgan";
import { setupProxies } from "./proxy";
import { ROUTES } from "./route";
import { setUpAuth } from "./auth";
import { setupRateLimit } from "./ratelimit";

const app: Express = express();
const port = process.env.PORT || 3000;

setupLogging(app);
setupRateLimit(app, ROUTES);
setUpAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.get("/hello", (req: Request, resp: Response) => {
  return resp.send("HELLO WORLD!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
