import { Request, Express } from "express";
import { RouteConfig } from "./types/proxy";

export const checkCredit = (request: Request) => {
  return new Promise((resolve, reject) => {
    console.log("Checking credit with token", request.headers["authorization"]);
    setTimeout(() => {
      reject("No sufficient credits");
    }, 500);
  });
};

export const setupCreditCheck = (app: Express, routes: RouteConfig[]) => {
  routes.forEach((r) => {
    if (r.creditCheck) {
      app.use(r.url, function (req, res, next) {
        checkCredit(req)
          .then(() => {
            next();
          })
          .catch((e) => {
            res.status(402).send({ e });
          });
      });
    }
  });
};
