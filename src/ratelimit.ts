import { Express } from "express";
import { RouteConfig } from "./types/proxy";
import rateLimit from "express-rate-limit";

export const setupRateLimit = (app: Express, routes: RouteConfig[]) => {
  routes.forEach((r) => {
    if (r.rateLimit) {
      app.use(r.url, rateLimit(r.rateLimit));
    }
  });
};
